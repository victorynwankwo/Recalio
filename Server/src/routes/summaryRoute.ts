import express from "express";
import {
  deleteSummary,
  generateSummary,
  getSummaries,
  getSummaryByDocumentId,
} from "../Controller/Document/summary";
import { verifyUser } from "../Middleware/verifyUser";

const router = express.Router();

/**
 * @openapi
 * /api/documents/{id}/summary:
 *   post:
 *     summary: Generate and save a document summary
 *     tags:
 *       - Summaries
 *     description: Generates a summary from the document's extracted text and saves it.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - $ref: '#/components/parameters/DocumentId'
 *     responses:
 *       '200':
 *         description: Summary generated successfully
 *         content:
 *           application/json:
 *             example:
 *               message: Summary generated successfully
 *               document:
 *                 $ref: '#/components/schemas/Document'
 *       '400':
 *         description: Document has no extractable text
 *       '401':
 *         $ref: '#/components/responses/Unauthorized'
 *       '403':
 *         description: The authenticated user does not own the document
 *       '404':
 *         $ref: '#/components/responses/NotFound'
 *       '500':
 *         description: Summary generation failed
 */
router.post("/documents/:id/summary", verifyUser, generateSummary);

/**
 * @openapi
 * /api/documents/{id}/summary:
 *   get:
 *     summary: Get the saved summary for one document
 *     tags:
 *       - Summaries
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - $ref: '#/components/parameters/DocumentId'
 *     responses:
 *       '200':
 *         description: Saved document summary
 *       '401':
 *         $ref: '#/components/responses/Unauthorized'
 *       '404':
 *         description: Document or summary was not found
 */
router.get("/documents/:id/summary", verifyUser, getSummaryByDocumentId);

/**
 * @openapi
 * /api/documents/{id}/summary:
 *   delete:
 *     summary: Delete a document's saved summary
 *     tags:
 *       - Summaries
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - $ref: '#/components/parameters/DocumentId'
 *     responses:
 *       '200':
 *         description: Summary deleted successfully
 *       '401':
 *         $ref: '#/components/responses/Unauthorized'
 *       '404':
 *         $ref: '#/components/responses/NotFound'
 */
router.delete("/documents/:id/summary", verifyUser, deleteSummary);

/**
 * @openapi
 * /api/summaries:
 *   get:
 *     summary: List all saved summaries for the authenticated user
 *     tags:
 *       - Summaries
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Saved summary list
 *       '401':
 *         $ref: '#/components/responses/Unauthorized'
 */
router.get("/summaries", verifyUser, getSummaries);

export default router;
