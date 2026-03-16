import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { join, extname } from "node:path";

const DIST = join(import.meta.dirname, "dist");
const PORT = parseInt(process.env.PORT, 10) || 3000;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".mjs": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".xml": "application/xml",
  ".txt": "text/plain; charset=utf-8",
};

async function tryFile(filePath) {
  try {
    const info = await stat(filePath);
    if (info.isFile()) return filePath;
  } catch {}
  return null;
}

async function resolve(pathname) {
  const decoded = decodeURIComponent(pathname);
  const safePath = join(DIST, decoded);
  if (!safePath.startsWith(DIST)) return null;

  return (
    (await tryFile(safePath)) ||
    (await tryFile(safePath + ".html")) ||
    (await tryFile(join(safePath, "index.html")))
  );
}

createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  const filePath = await resolve(url.pathname);

  if (!filePath) {
    const fallback = join(DIST, "404.html");
    const body = (await tryFile(fallback))
      ? await readFile(fallback)
      : "404 Not Found";
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    res.end(body);
    return;
  }

  const ext = extname(filePath).toLowerCase();
  const mime = MIME[ext] || "application/octet-stream";
  const body = await readFile(filePath);

  res.writeHead(200, {
    "Content-Type": mime,
    "Cache-Control": ext === ".html" ? "no-cache" : "public, max-age=31536000, immutable",
  });
  res.end(body);
}).listen(PORT, "0.0.0.0", () => {
  console.log(`Listening on http://0.0.0.0:${PORT}`);
});
