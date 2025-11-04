#!/usr/bin/env node

/*
Helper intended to copy icon and font assets to dist
as needed. There may be a more direct, vite-friendly
way to accomplish this.
*/

import { promises as fs } from "fs";
import { resolve, dirname, extname, join } from "path";
import { fileURLToPath } from "url";

const ALLOWED_EXTENSIONS = [".css", ".svg", ".json", ".woff", ".woff2"];

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const iconsSourceDir = resolve(__dirname, "../src/icons");
const iconsDestDir = resolve(__dirname, "../dist/icons");
const fontsSourceDir = resolve(__dirname, "../src/fonts");
const fontsDestDir = resolve(__dirname, "../dist/fonts");

async function copyDirectory(srcDir, destDir, label) {
  try {
    // Create destination directory if it doesn't exist
    await fs.mkdir(destDir, { recursive: true });

    // Read source directory
    const entries = await fs.readdir(srcDir, { withFileTypes: true });

    for (const entry of entries) {
      const srcPath = join(srcDir, entry.name);
      const destPath = join(destDir, entry.name);

      if (entry.isDirectory()) {
        // Recursively copy subdirectories
        await copyDirectory(srcPath, destPath, label);
      } else if (entry.isFile()) {
        const fileExtension = extname(entry.name);

        if (ALLOWED_EXTENSIONS.includes(fileExtension)) {
          await fs.copyFile(srcPath, destPath);
          console.log(`Copied ${entry.name} to ${label}/`);
        }
      }
    }
  } catch (error) {
    console.error(`❌ Error copying ${label}:`, error);
    throw error;
  }
}

async function copyAssets() {
  try {
    await copyDirectory(iconsSourceDir, iconsDestDir, "dist/icons");
    console.log("✅ Icons copied successfully");

    await copyDirectory(fontsSourceDir, fontsDestDir, "dist/fonts");
    console.log("✅ Fonts copied successfully");
  } catch (error) {
    console.error("❌ Error copying assets:", error);
    process.exit(1);
  }
}

copyAssets();
