import { Response, Request } from "express";
import prisma from "../../Config/db";
import { PDFParse } from "pdf-parse";
import { uploadToCloudinary } from "../../util/uploadToCloudinary";

export const uploadDocument = async (req: Request, res: Response) => {
    //  console.log("🔥 uploadDocument reached");
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

export const getDocuments = async (req: Request, res: Response) => {
  try {
    const userId = req.authUser!.id;

    const documents = await prisma.document.findMany({
      where: { userId },
      orderBy: {
        createdAt: "desc",
      },
    });

    return res.status(200).json({
      success: true,
      data: documents,
    });
  } catch (err) {
    console.error("Error fetching documents:", err);
    return res.status(500).json({
      success: false,
      message: "Internal server error failed to fetch documents",
    });
  }
};

export const getDocumentById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const userId = req.authUser!.id;

    const document = await prisma.document.findFirst({
      where: { id, userId },
    });

    if (!document) {
      return res.status(404).json({ message: "Document not found" });
    }

    return res.status(200).json({ success: true, data: document });
  } catch (err) {
    console.error("Error fetching document:", err);
    return res.status(500).json({ message: "Failed to fetch document" });
  }
};

export const updateDocument = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const userId = req.authUser!.id;
    const { title } = req.body as { title?: unknown };

    if (typeof title !== "string" || !title.trim()) {
      return res.status(400).json({ message: "A document title is required" });
    }

    const document = await prisma.document.findFirst({ where: { id, userId } });
    if (!document) {
      return res.status(404).json({ message: "Document not found" });
    }

    const updatedDocument = await prisma.document.update({
      where: { id },
      data: { title: title.trim() },
    });

    return res.status(200).json({
      message: "Document updated successfully",
      document: updatedDocument,
    });
  } catch (err) {
    console.error("Error updating document:", err);
    return res.status(500).json({ message: "Failed to update document" });
  }
};

export const deleteDocument = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const userId = req.authUser!.id;

    const document = await prisma.document.findFirst({ where: { id, userId } });
    if (!document) {
      return res.status(404).json({ message: "Document not found" });
    }

    await prisma.document.delete({ where: { id } });
    return res.status(200).json({ message: "Document deleted successfully" });
  } catch (err) {
    console.error("Error deleting document:", err);
    return res.status(500).json({ message: "Failed to delete document" });
  }
};


