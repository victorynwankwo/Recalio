import express from "express";
import {
  deleteFlashcard,
  generateFlashcards,
  getFlashcards,
} from "../Controller/Quiz/flashcard";
import {
  deleteQuiz,
  generateQuiz,
  getQuizById,
  getQuizzes,
} from "../Controller/Quiz/quiz";
import { verifyUser } from "../Middleware/verifyUser";

const router = express.Router();

/**
 * @openapi
 * /api/documents/{id}/flashcards:
 *   post:
 *     summary: Generate and save flashcards for a document
 *     tags:
 *       - Flashcards
 *     description: Generates 10 flashcards from the document's extracted text. This endpoint does not require a request body.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - $ref: '#/components/parameters/DocumentId'
 *     responses:
 *       '200':
 *         description: Flashcards generated and saved successfully
 *         content:
 *           application/json:
 *             example:
 *               message: Flashcards generated successfully
 *               documentId: cm123abc
 *               flashcards:
 *                 - id: cm456def
 *                   front: What is cell biology?
 *                   back: The study of cell structure and function.
 *                   documentId: cm123abc
 *       '400':
 *         description: Document has no extractable text
 *         content:
 *           application/json:
 *             example:
 *               message: Document has no extractable text
 *       '401':
 *         $ref: '#/components/responses/Unauthorized'
 *       '404':
 *         $ref: '#/components/responses/NotFound'
 *       '500':
 *         description: Flashcard generation failed
 *         content:
 *           application/json:
 *             example:
 *               message: Failed to generate flashcards
 */
router.post("/documents/:id/flashcards", verifyUser, generateFlashcards);

/**
 * @openapi
 * /api/documents/{id}/flashcards:
 *   get:
 *     summary: List saved flashcards for a document
 *     tags:
 *       - Flashcards
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - $ref: '#/components/parameters/DocumentId'
 *     responses:
 *       '200':
 *         description: Flashcards saved for the document
 *         content:
 *           application/json:
 *             example:
 *               data:
 *                 - id: cm456def
 *                   front: What is cell biology?
 *                   back: The study of cell structure and function.
 *                   documentId: cm123abc
 *       '401':
 *         $ref: '#/components/responses/Unauthorized'
 *       '404':
 *         $ref: '#/components/responses/NotFound'
 */
router.get("/documents/:id/flashcards", verifyUser, getFlashcards);

/**
 * @openapi
 * /api/documents/{id}/quiz:
 *   post:
 *     summary: Generate and save a multiple-choice quiz for a document
 *     tags:
 *       - Quizzes
 *     description: Generates a 10-question multiple-choice quiz. This endpoint does not require a request body.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - $ref: '#/components/parameters/DocumentId'
 *     responses:
 *       '200':
 *         description: Quiz generated and saved successfully
 *         content:
 *           application/json:
 *             example:
 *               message: Quiz generated successfully
 *               documentId: cm123abc
 *               quiz:
 *                 $ref: '#/components/schemas/Quiz'
 *       '400':
 *         description: Document has no extractable text
 *         content:
 *           application/json:
 *             example:
 *               message: Document has no extractable text
 *       '401':
 *         $ref: '#/components/responses/Unauthorized'
 *       '404':
 *         $ref: '#/components/responses/NotFound'
 *       '500':
 *         description: Quiz generation failed
 *         content:
 *           application/json:
 *             example:
 *               message: Failed to generate quiz
 */
router.post("/documents/:id/quiz", verifyUser, generateQuiz);

/**
 * @openapi
 * /api/documents/{id}/quizzes:
 *   get:
 *     summary: List saved quizzes for a document
 *     tags:
 *       - Quizzes
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - $ref: '#/components/parameters/DocumentId'
 *     responses:
 *       '200':
 *         description: Quizzes saved for the document
 *         content:
 *           application/json:
 *             example:
 *               data:
 *                 - $ref: '#/components/schemas/Quiz'
 *       '401':
 *         $ref: '#/components/responses/Unauthorized'
 *       '404':
 *         $ref: '#/components/responses/NotFound'
 */
router.get("/documents/:id/quizzes", verifyUser, getQuizzes);

/**
 * @openapi
 * /api/flashcards/{flashcardId}:
 *   delete:
 *     summary: Delete one saved flashcard
 *     tags:
 *       - Flashcards
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: flashcardId
 *         in: path
 *         required: true
 *         description: The flashcard cuid.
 *         schema: { type: string }
 *     responses:
 *       '200':
 *         description: Flashcard deleted successfully
 *         content:
 *           application/json:
 *             example:
 *               message: Flashcard deleted successfully
 *       '401':
 *         $ref: '#/components/responses/Unauthorized'
 *       '404':
 *         $ref: '#/components/responses/NotFound'
 */
router.delete("/flashcards/:flashcardId", verifyUser, deleteFlashcard);

/**
 * @openapi
 * /api/quizzes/{quizId}:
 *   get:
 *     summary: Get one saved quiz
 *     tags:
 *       - Quizzes
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: quizId
 *         in: path
 *         required: true
 *         description: The quiz cuid.
 *         schema: { type: string }
 *     responses:
 *       '200':
 *         description: Quiz details
 *         content:
 *           application/json:
 *             example:
 *               data:
 *                 $ref: '#/components/schemas/Quiz'
 *       '401':
 *         $ref: '#/components/responses/Unauthorized'
 *       '404':
 *         $ref: '#/components/responses/NotFound'
 */
router.get("/quizzes/:quizId", verifyUser, getQuizById);

/**
 * @openapi
 * /api/quizzes/{quizId}:
 *   delete:
 *     summary: Delete one saved quiz
 *     tags:
 *       - Quizzes
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: quizId
 *         in: path
 *         required: true
 *         description: The quiz cuid.
 *         schema: { type: string }
 *     responses:
 *       '200':
 *         description: Quiz deleted successfully
 *         content:
 *           application/json:
 *             example:
 *               message: Quiz deleted successfully
 *       '401':
 *         $ref: '#/components/responses/Unauthorized'
 *       '404':
 *         $ref: '#/components/responses/NotFound'
 */
router.delete("/quizzes/:quizId", verifyUser, deleteQuiz);
router.delete("/quizzes/:quizId", verifyUser, deleteQuiz);

export default router;
