#!/usr/bin/env node

/*
FIXME: This is a work in progress.

Helper intended to copy icon assets to dist
as needed. There may be a more direct, vite-friendly
way to accomplish this.
*/

import { promises as fs } from "fs";
import { resolve, dirname, extname } from "path";
import { fileURLToPath } from "url";

const ALLOWED_EXTENSIONS = [".css", ".svg", ".json", ".woff", ".woff2"];

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const srcDir = resolve(__dirname, "../src/icons");
const destDir = resolve(__dirname, "../dist/icons");

async function copyIcons() {
  try {
    // Create destination directory if it doesn't exist
    await fs.mkdir(destDir, { recursive: true });

    // Read source directory
    const files = await fs.readdir(srcDir, { withFileTypes: true });

    for (const file of files) {
      if (file.isFile()) {
        const fileExtension = extname(file.name);

        if (ALLOWED_EXTENSIONS.includes(fileExtension)) {
          const srcFile = resolve(srcDir, file.name);
          const destFile = resolve(destDir, file.name);
          await fs.copyFile(srcFile, destFile);
          console.log(`Copied ${file.name} to dist/icons/`);
        }
      }
    }

    console.log("✅ Icons copied successfully");
  } catch (error) {
    console.error("❌ Error copying icons:", error);
    process.exit(1);
  }
}

copyIcons();
