import express from "express";
import { uploadDocument } from "../Controller/Document/document";
import { upload } from "../Middleware/multer";
import {verifyUser} from "../Middleware/verifyUser";

const router = express.Router();

router.post(
  "/documents",
  upload.single("file"),
  verifyUser,
  uploadDocument
);

export default router;