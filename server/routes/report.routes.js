import express from "express";
import multer from "multer";
import Controller from "../controllers/index.controller.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });

router.get("/health", (req, res) => {
  res.send(`Server is running properly`);
});

router.post("/upload", upload.single("report"), Controller.ProcessReport);

export default router;
