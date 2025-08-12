// controllers/index.controller.js
import { extractTextFromReport } from "../services/ocrService.js";

export const processReport = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No files uploaded" });
  }

  // Check if the uploaded file is a PDF
  if (!req.file.mimetype || !req.file.mimetype.includes("pdf")) {
    return res.status(400).json({ error: "Only PDF files are allowed" });
  }

  try {
    console.log("Uploaded file:", req.file);

    const extractedText = await extractTextFromReport(req.file.path);

    res.json({
      message: "Report processed successfully",
      filename: req.file.originalname,
      text: extractedText.slice(0, 500) + "...", // First 500 chars
      fullTextLength: extractedText.length,
    });
  } catch (err) {
    console.error("Error processing report:", err);
    res.status(500).json({ error: "Failed to process report: " + err.message });
  }
};
