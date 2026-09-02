import express from "express";
import {
  deleteFlashcard,
  generateFlashcards,
  getFlashcards,
} from "../Controller/Quiz/flashcard";
import { deleteQuiz, generateQuiz, getQuizById, getQuizzes } from "../Controller/Quiz/quiz";
import { verifyUser } from "../Middleware/verifyUser";

const router = express.Router();

/**
 * @openapi
 * /api/documents/{id}/flashcards:
 *   post:
 *     tags: [Flashcards]
 *     summary: Generate and save flashcards for a document
 *     security: [{ bearerAuth: [] }]
 *     parameters: [{ $ref: '#/components/parameters/DocumentId' }]
 *     responses:
 *       '200': { description: Flashcards generated successfully }
 *       '404': { $ref: '#/components/responses/NotFound' }
 *   get:
 *     tags: [Flashcards]
 *     summary: List saved flashcards for a document
 *     security: [{ bearerAuth: [] }]
 *     parameters: [{ $ref: '#/components/parameters/DocumentId' }]
 *     responses:
 *       '200': { description: Flashcard list }
 * /api/documents/{id}/quiz:
 *   post:
 *     tags: [Quizzes]
 *     summary: Generate and save a multiple-choice quiz for a document
 *     security: [{ bearerAuth: [] }]
 *     parameters: [{ $ref: '#/components/parameters/DocumentId' }]
 *     responses:
 *       '200': { description: Quiz generated successfully }
 *       '404': { $ref: '#/components/responses/NotFound' }
 * /api/documents/{id}/quizzes:
 *   get:
 *     tags: [Quizzes]
 *     summary: List saved quizzes for a document
 *     security: [{ bearerAuth: [] }]
 *     parameters: [{ $ref: '#/components/parameters/DocumentId' }]
 *     responses:
 *       '200': { description: Quiz list }
 * /api/flashcards/{flashcardId}:
 *   delete:
 *     tags: [Flashcards]
 *     summary: Delete one saved flashcard
 *     security: [{ bearerAuth: [] }]
 *     parameters:
 *       - name: flashcardId
 *         in: path
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       '200': { description: Flashcard deleted successfully }
 *       '404': { $ref: '#/components/responses/NotFound' }
 * /api/quizzes/{quizId}:
 *   get:
 *     tags: [Quizzes]
 *     summary: Get one saved quiz
 *     security: [{ bearerAuth: [] }]
 *     parameters:
 *       - name: quizId
 *         in: path
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       '200': { description: Quiz details }
 *       '404': { $ref: '#/components/responses/NotFound' }
 *   delete:
 *     tags: [Quizzes]
 *     summary: Delete one saved quiz
 *     security: [{ bearerAuth: [] }]
 *     parameters:
 *       - name: quizId
 *         in: path
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       '200': { description: Quiz deleted successfully }
 *       '404': { $ref: '#/components/responses/NotFound' }
 */
router.post("/documents/:id/flashcards", verifyUser, generateFlashcards);
router.get("/documents/:id/flashcards", verifyUser, getFlashcards);
router.delete("/flashcards/:flashcardId", verifyUser, deleteFlashcard);
router.post("/documents/:id/quiz", verifyUser, generateQuiz);
router.get("/documents/:id/quizzes", verifyUser, getQuizzes);
router.get("/quizzes/:quizId", verifyUser, getQuizById);
router.delete("/quizzes/:quizId", verifyUser, deleteQuiz);

export default router;
