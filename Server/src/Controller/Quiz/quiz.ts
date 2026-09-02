import { Request, Response } from "express";
import type { Prisma } from "@prisma/client";
import prisma from "../../Config/db";
import genAI from "../../Config/gemini";

export const generateQuiz = async (req: Request, res: Response) => {
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
    const result = await model.generateContent(`Create a 10-question multiple-choice quiz from this material. Return only valid JSON in this exact format: {"quiz":[{"question":"...","options":["...","...","...","..."],"answer":"the exact correct option text","explanation":"brief explanation"}]}. Do not wrap the JSON in markdown.\n\nStudy material:\n${document.extractedText}`);
    const generated = JSON.parse(result.response.text()) as { quiz?: unknown[] };
    if (!Array.isArray(generated.quiz) || generated.quiz.length === 0) {
      return res.status(502).json({ message: "AI returned an invalid quiz response" });
    }

    const quiz = await prisma.quiz.create({
      data: {
        documentId: document.id,
        questions: generated.quiz as Prisma.InputJsonValue,
      },
    });

    return res.status(200).json({
      message: "Quiz generated successfully",
      documentId: document.id,
      quiz,
    });
  } catch (err) {
    console.error("Quiz generation error:", err);
    return res.status(500).json({ message: "Failed to generate quiz" });
  }
};

export const getQuizzes = async (req: Request, res: Response) => {
  try {
    const documentId = req.params.id as string;
    const userId = req.authUser!.id;
    const document = await prisma.document.findFirst({ where: { id: documentId, userId } });

    if (!document) return res.status(404).json({ message: "Document not found" });
    const quizzes = await prisma.quiz.findMany({
      where: { documentId },
      orderBy: { createdAt: "desc" },
    });
    return res.status(200).json({ data: quizzes });
  } catch (err) {
    console.error("Error fetching quizzes:", err);
    return res.status(500).json({ message: "Failed to fetch quizzes" });
  }
};

export const getQuizById = async (req: Request, res: Response) => {
  try {
    const id = req.params.quizId as string;
    const userId = req.authUser!.id;
    const quiz = await prisma.quiz.findFirst({ where: { id, document: { userId } } });

    if (!quiz) return res.status(404).json({ message: "Quiz not found" });
    return res.status(200).json({ data: quiz });
  } catch (err) {
    console.error("Error fetching quiz:", err);
    return res.status(500).json({ message: "Failed to fetch quiz" });
  }
};

export const deleteQuiz = async (req: Request, res: Response) => {
  try {
    const id = req.params.quizId as string;
    const userId = req.authUser!.id;
    const quiz = await prisma.quiz.findFirst({ where: { id, document: { userId } } });

    if (!quiz) return res.status(404).json({ message: "Quiz not found" });
    await prisma.quiz.delete({ where: { id } });
    return res.status(200).json({ message: "Quiz deleted successfully" });
  } catch (err) {
    console.error("Error deleting quiz:", err);
    return res.status(500).json({ message: "Failed to delete quiz" });
  }
};
