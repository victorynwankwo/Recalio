import express from "express";
import { generateSummary } from "../Controller/Document/summary";
import { verifyUser } from "../Middleware/verifyUser";

const router = express.Router();

// POST /api/documents/:id/summary — generate and save a summary for a document
router.post("/documents/:id/summary", verifyUser, generateSummary);

export default router;
