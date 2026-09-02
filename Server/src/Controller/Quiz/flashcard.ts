import { Request, Response } from "express";
import prisma from "../../Config/db";
import genAI from "../../Config/gemini";

export const generateFlashcards = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const userId = req.authUser!.id;
    const document = await prisma.document.findFirst({ where: { id, userId } });

    if (!document) {
      return res.status(404).json({ message: "Document not found" });
    }
    if (!document.extractedText) {
      return res.status(400).json({ message: "Document has no extractable text" });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-3.6-flash" });
    const result = await model.generateContent(`Create 10 concise study flashcards from this material. Return only valid JSON in this exact format: {"flashcards":[{"front":"question or term","back":"answer or definition"}]}. Do not wrap the JSON in markdown.\n\nStudy material:\n${document.extractedText}`);
    const generated = JSON.parse(result.response.text()) as {
      flashcards?: Array<{ front?: unknown; back?: unknown }>;
    };

    if (!Array.isArray(generated.flashcards) || generated.flashcards.length === 0) {
      return res.status(502).json({ message: "AI returned an invalid flashcard response" });
    }

    const flashcards = generated.flashcards.filter(
      (flashcard): flashcard is { front: string; back: string } =>
        typeof flashcard.front === "string" && typeof flashcard.back === "string",
    );

    if (flashcards.length === 0) {
      return res.status(502).json({ message: "AI returned no valid flashcards" });
    }

    const savedFlashcards = await prisma.$transaction(
      flashcards.map((flashcard) =>
        prisma.flashcard.create({ data: { ...flashcard, documentId: document.id } }),
      ),
    );

    return res.status(200).json({
      message: "Flashcards generated successfully",
      documentId: document.id,
      flashcards: savedFlashcards,
    });
  } catch (err) {
    console.error("Flashcard generation error:", err);
    return res.status(500).json({ message: "Failed to generate flashcards" });
  }
};

export const getFlashcards = async (req: Request, res: Response) => {
  try {
    const documentId = req.params.id as string;
    const userId = req.authUser!.id;

    const document = await prisma.document.findFirst({ where: { id: documentId, userId } });
    if (!document) return res.status(404).json({ message: "Document not found" });

    const flashcards = await prisma.flashcard.findMany({
      where: { documentId },
      orderBy: { createdAt: "desc" },
    });
    return res.status(200).json({ data: flashcards });
  } catch (err) {
    console.error("Error fetching flashcards:", err);
    return res.status(500).json({ message: "Failed to fetch flashcards" });
  }
};

export const deleteFlashcard = async (req: Request, res: Response) => {
  try {
    const id = req.params.flashcardId as string;
    const userId = req.authUser!.id;
    const flashcard = await prisma.flashcard.findFirst({
      where: { id, document: { userId } },
    });

    if (!flashcard) return res.status(404).json({ message: "Flashcard not found" });
    await prisma.flashcard.delete({ where: { id } });
    return res.status(200).json({ message: "Flashcard deleted successfully" });
  } catch (err) {
    console.error("Error deleting flashcard:", err);
    return res.status(500).json({ message: "Failed to delete flashcard" });
  }
};
