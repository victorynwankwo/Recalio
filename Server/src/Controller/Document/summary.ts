
import { Request, Response } from "express";
import prisma from "../../Config/db";
import genAI from "../../Config/gemini";

export const generateSummary = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const userId = req.authUser!.id;

    const document = await prisma.document.findUnique({
      where: { id },
    });

    if (!document) {
      return res.status(404).json({ message: "Document not found" });
    }

    if (document.userId !== userId) {
      return res.status(403).json({ message: "You don't have access to this document" });
    }

    if (!document.extractedText) {
      return res.status(400).json({ message: "Document has no extractable text" });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-3.6-flash" });

    const prompt = `Summarize the following study material in plain text only. Do not use markdown formatting — no asterisks, no hashtags, no bullet symbols, no bold or headers. Write it as clear, well-organized paragraphs and plain numbered lists using regular numbers (1., 2., 3.) if needed. Highlight key concepts and important definitions naturally within the writing.

Study material:
${document.extractedText}`;


    const result = await model.generateContent(prompt);
    const summaryText = result.response.text();

    const updatedDocument = await prisma.document.update({
      where: { id },
      data: { summary: summaryText },
    });

    return res.status(200).json({
      message: "Summary generated successfully",
      document: updatedDocument,
    });
  } catch (err) {
    console.error("Summary generation error:", err);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const getSummaries = async (req: Request, res: Response) => {
  try {
    const userId = req.authUser!.id;
    const summaries = await prisma.document.findMany({
      where: { userId, summary: { not: null } },
      select: { id: true, title: true, summary: true, createdAt: true },
      orderBy: { createdAt: "desc" },
    });

    return res.status(200).json({ success: true, data: summaries });
  } catch (err) {
    console.error("Error fetching summaries:", err);
    return res.status(500).json({ message: "Failed to fetch summaries" });
  }
};

export const getSummaryByDocumentId = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const userId = req.authUser!.id;
    const document = await prisma.document.findFirst({
      where: { id, userId },
      select: { id: true, title: true, summary: true, createdAt: true },
    });

    if (!document) return res.status(404).json({ message: "Document not found" });
    if (!document.summary) return res.status(404).json({ message: "Summary not found" });

    return res.status(200).json({ success: true, data: document });
  } catch (err) {
    console.error("Error fetching summary:", err);
    return res.status(500).json({ message: "Failed to fetch summary" });
  }
};

export const deleteSummary = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const userId = req.authUser!.id;
    const document = await prisma.document.findFirst({ where: { id, userId } });

    if (!document) return res.status(404).json({ message: "Document not found" });
    if (!document.summary) return res.status(404).json({ message: "Summary not found" });

    await prisma.document.update({ where: { id }, data: { summary: null } });
    return res.status(200).json({ message: "Summary deleted successfully" });
  } catch (err) {
    console.error("Error deleting summary:", err);
    return res.status(500).json({ message: "Failed to delete summary" });
  }
};
