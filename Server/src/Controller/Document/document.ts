import { Response, Request } from "express";
import prisma from "../../Config/db";
import { PDFParse } from "pdf-parse";
import { uploadToCloudinary } from "../../util/uploadToCloudinary";

export const uploadDocument = async (req: Request, res: Response) => {
     console.log("🔥 uploadDocument reached");
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const userId = req.authUser!.id;

    const parser = new PDFParse({ data: req.file.buffer });
    const parsed = await parser.getText();
    const extractedText = parsed.text;
    await parser.destroy();

    const uploadResult = await uploadToCloudinary(
      req.file.buffer,
      "recalio/documents",
    );

    const document = await prisma.document.create({
      data: {
        title: req.file.originalname,
        fileUrl: uploadResult.secure_url,
        extractedText,
        userId,
      },
    });

    return res.status(201).json({
      message: "Document uploaded successfully",
      document,
    });
  } catch (err) {
    console.error("Upload error:", err);
    return res.status(500).json({ message: "Something went wrong" });
  }
};
