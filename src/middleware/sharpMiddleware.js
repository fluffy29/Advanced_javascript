import sharp from "sharp";
import { join } from "path";
import { unlink } from "fs";

const sharpMiddleware = (outputFormat = "webp", quality = 80) => {
  return async (req, res, next) => {
    if (!req.file) {
      return next();
    }
    try {
      const inputPath = req.file.path;

      const filenameWithoutExtension = req.file.filename
        .split(".")
        .slice(0, -1)
        .join(".");
      const outputPath = join(
        "./assets",
        `${filenameWithoutExtension}.${outputFormat}`
      ).replace(/\\/g, "/");

      await sharp(inputPath)
        .toFormat(outputFormat, { quality: quality })
        .toFile(outputPath);

      unlink(inputPath, (err) => {
        if (err) {
          console.error("Error deleting original file:", err);
        } else {
          console.log("Original file deleted successfully:", inputPath);
        }
      });

      req.file.processedPath = outputPath;
      req.file.mimetype = `image/${outputFormat}`;
      req.file.originalname = `${filenameWithoutExtension}.${outputFormat}`;

      next();
    } catch (err) {
      console.error("Error processing image with Sharp:", err);
      res.status(500).json({ error: "Failed to process image" });
    }
  };
};

export default sharpMiddleware;
