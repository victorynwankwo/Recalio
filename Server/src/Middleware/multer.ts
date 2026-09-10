import multer from "multer";

// Store the file in memory temporarily, so we can pipe it straight to Cloudinary
// without saving it to disk first
const storage = multer.memoryStorage();

export const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB max file size
  fileFilter: (req, file, cb) => {
    console.log("File mimetype:", req.file?.mimetype);

console.log("File originalname:", req.file?.originalname);
    if (file.mimetype !== "application/pdf") {
      return cb(new Error("Only PDF files are allowed"));
    }
    cb(null, true);
  },
});