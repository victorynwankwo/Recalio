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
 *     tags: [Documents]
 *     summary: Upload a PDF study document
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required: [file]
 *             properties: { file: { type: string, format: binary } }
 *     responses:
 *       '201': { description: Document uploaded successfully }
 *       '400': { $ref: '#/components/responses/BadRequest' }
 *   get:
 *     tags: [Documents]
 *     summary: List the authenticated user's documents
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       '200': { description: Document list }
 *       '401': { $ref: '#/components/responses/Unauthorized' }
 */
router.post("/documents", verifyUser, upload.single("file"), uploadDocument);
router.get("/documents", verifyUser, getDocuments);

/**
 * @openapi
 * /api/documents/{id}:
 *   get:
 *     tags: [Documents]
 *     summary: Get one document
 *     security: [{ bearerAuth: [] }]
 *     parameters: [{ $ref: '#/components/parameters/DocumentId' }]
 *     responses:
 *       '200': { description: Document details }
 *       '404': { $ref: '#/components/responses/NotFound' }
 *   patch:
 *     tags: [Documents]
 *     summary: Rename a document
 *     security: [{ bearerAuth: [] }]
 *     parameters: [{ $ref: '#/components/parameters/DocumentId' }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [title]
 *             properties: { title: { type: string, example: Biology revision notes } }
 *     responses:
 *       '200': { description: Document updated successfully }
 *       '400': { $ref: '#/components/responses/BadRequest' }
 *   delete:
 *     tags: [Documents]
 *     summary: Delete a document and its generated resources
 *     security: [{ bearerAuth: [] }]
 *     parameters: [{ $ref: '#/components/parameters/DocumentId' }]
 *     responses:
 *       '200': { description: Document deleted successfully }
 *       '404': { $ref: '#/components/responses/NotFound' }
 */
router.get("/documents/:id", verifyUser, getDocumentById);
router.patch("/documents/:id", verifyUser, updateDocument);
router.delete("/documents/:id", verifyUser, deleteDocument);

export default router;
