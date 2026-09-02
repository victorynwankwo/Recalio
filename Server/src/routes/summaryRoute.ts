import express from "express";
import {
  deleteSummary,
  generateSummary,
  getSummaries,
  getSummaryByDocumentId,
} from "../Controller/Document/summary";
import { verifyUser } from "../Middleware/verifyUser";

const router = express.Router();

// POST /api/documents/:id/summary — generate and save a summary for a document
/**
 * @openapi
 * /api/documents/{id}/summary:
 *   post:
 *     tags: [Summaries]
 *     summary: Generate and save a document summary
 *     security: [{ bearerAuth: [] }]
 *     parameters: [{ $ref: '#/components/parameters/DocumentId' }]
 *     responses:
 *       '200': { description: Summary generated successfully }
 *       '400': { $ref: '#/components/responses/BadRequest' }
 *       '401': { $ref: '#/components/responses/Unauthorized' }
 *       '404': { $ref: '#/components/responses/NotFound' }
 *   get:
 *     tags: [Summaries]
 *     summary: Get the saved summary for one document
 *     security: [{ bearerAuth: [] }]
 *     parameters: [{ $ref: '#/components/parameters/DocumentId' }]
 *     responses:
 *       '200': { description: Saved document summary }
 *       '401': { $ref: '#/components/responses/Unauthorized' }
 *       '404': { $ref: '#/components/responses/NotFound' }
 *   delete:
 *     tags: [Summaries]
 *     summary: Delete a document's saved summary
 *     security: [{ bearerAuth: [] }]
 *     parameters: [{ $ref: '#/components/parameters/DocumentId' }]
 *     responses:
 *       '200': { description: Summary deleted successfully }
 *       '401': { $ref: '#/components/responses/Unauthorized' }
 *       '404': { $ref: '#/components/responses/NotFound' }
 */
router.post("/documents/:id/summary", verifyUser, generateSummary);
router.get("/documents/:id/summary", verifyUser, getSummaryByDocumentId);
router.delete("/documents/:id/summary", verifyUser, deleteSummary);
/**
 * @openapi
 * /api/summaries:
 *   get:
 *     tags: [Summaries]
 *     summary: List all summaries owned by the authenticated user
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       '200': { description: Summary list }
 *       '401': { $ref: '#/components/responses/Unauthorized' }
 */
router.get("/summaries", verifyUser, getSummaries);

export default router;
