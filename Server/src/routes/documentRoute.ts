import express from "express";
import {
  deleteDocument,
  getDocumentById,
  getDocuments,
  updateDocument,
  uploadDocument,
} from "../Controller/Document/document";
import { upload } from "../Middleware/multer";
import { verifyUser } from "../Middleware/verifyUser";

const router = express.Router();

/**
 * @openapi
 * /api/documents:
 *   post:
 *     summary: Upload a PDF study document
 *     tags:
 *       - Documents
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: PDF study document to upload. The form field must be named `file`.
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - file
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *                 description: PDF file containing study material
 *     responses:
 *       '201':
 *         description: Document uploaded successfully
 *         content:
 *           application/json:
 *             example:
 *               message: Document uploaded successfully
 *               document:
 *                 $ref: '#/components/schemas/Document'
 *       '400':
 *         description: No file was uploaded
 *         content:
 *           application/json:
 *             example:
 *               message: No file uploaded
 *       '401':
 *         $ref: '#/components/responses/Unauthorized'
 *       '500':
 *         description: Upload or document processing failed
 *         content:
 *           application/json:
 *             example:
 *               message: Something went wrong
 */
router.post("/documents", verifyUser, upload.single("file"), uploadDocument);

/**
 * @openapi
 * /api/documents:
 *   get:
 *     summary: List the authenticated user's documents
 *     tags:
 *       - Documents
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Documents owned by the authenticated user
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               data:
 *                 - id: cm123abc
 *                   title: Biology lecture 1.pdf
 *                   fileUrl: https://res.cloudinary.com/example/biology.pdf
 *                   extractedText: Cell biology study material
 *                   summary: null
 *                   createdAt: '2026-09-03T12:00:00.000Z'
 *       '401':
 *         $ref: '#/components/responses/Unauthorized'
 */
router.get("/documents", verifyUser, getDocuments);

/**
 * @openapi
 * /api/documents/{id}:
 *   get:
 *     summary: Get one document
 *     tags:
 *       - Documents
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - $ref: '#/components/parameters/DocumentId'
 *     responses:
 *       '200':
 *         description: Document details
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               data:
 *                 $ref: '#/components/schemas/Document'
 *       '401':
 *         $ref: '#/components/responses/Unauthorized'
 *       '404':
 *         $ref: '#/components/responses/NotFound'
 */
router.get("/documents/:id", verifyUser, getDocumentById);

/**
 * @openapi
 * /api/documents/{id}:
 *   patch:
 *     tags: [Documents]
 *     summary: Rename a document
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - $ref: '#/components/parameters/DocumentId'
 *     requestBody:
 *       description: New title for the document
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *             properties:
 *               title:
 *                 type: string
 *                 example: Biology revision notes
 *     responses:
 *       '200':
 *         description: Document updated successfully
 *         content:
 *           application/json:
 *             example:
 *               message: Document updated successfully
 *               document:
 *                 $ref: '#/components/schemas/Document'
 *       '400':
 *         description: A non-empty document title is required
 *         content:
 *           application/json:
 *             example:
 *               message: A document title is required
 *       '401':
 *         $ref: '#/components/responses/Unauthorized'
 *       '404':
 *         $ref: '#/components/responses/NotFound'
 */
router.patch("/documents/:id", verifyUser, updateDocument);

/**
 * @openapi
 * /api/documents/{id}:
 *   delete:
 *     tags: [Documents]
 *     summary: Delete a document and its generated resources
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - $ref: '#/components/parameters/DocumentId'
 *     responses:
 *       '200':
 *         description: Document deleted successfully
 *         content:
 *           application/json:
 *             example:
 *               message: Document deleted successfully
 *       '401':
 *         $ref: '#/components/responses/Unauthorized'
 *       '404':
 *         $ref: '#/components/responses/NotFound'
 */
router.delete("/documents/:id", verifyUser, deleteDocument);

export default router;
