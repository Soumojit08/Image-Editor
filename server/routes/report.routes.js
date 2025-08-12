import express from "express";
import multer from "multer";
import Controller from "../controllers/index.controller.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "application/pdf") {
      cb(null, true);
    } else {
      cb(new Error("Only PDF files are allowed"), false);
    }
  },
});

router.get("/health", (req, res) => {
  res.send(`Server is running properly`);
});

router.post("/upload", upload.single("file"), Controller.ProcessReport);

// Error handling middleware for multer errors
router.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({ error: "File too large" });
    }
    if (error.code === "LIMIT_FILE_COUNT") {
      return res.status(400).json({ error: "Too many files" });
    }
    if (error.code === "LIMIT_UNEXPECTED_FILE") {
      return res.status(400).json({
        error:
          'Unexpected field name. Please use "file" as the field name for the PDF upload.',
        expectedField: "file",
        receivedFields: Object.keys(req.body || {}),
      });
    }
  }

  if (error.message === "Only PDF files are allowed") {
    return res.status(400).json({ error: error.message });
  }

  console.error("Upload error:", error);
  res.status(500).json({ error: "Upload failed" });
});

export default router;
