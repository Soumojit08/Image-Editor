import { extractTextFromReport } from "../services/ocrService.js";

export const processReport = async () => {
  try {
    if (!req.file) return res.status(400).json({ error: "No files uploaded" });

    const textData = await extractTextFromReport(req.file.path);

    res.json({
      message: "Report processed successfully",
      extractedText: textData,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to process report" });
  }
};
