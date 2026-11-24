// เว็บนี้เป็น Static Website: ใช้ Node.js เปิดดูในเครื่องเพื่อทดสอบเท่านั้น
// เมื่อนำขึ้น GitHub Pages จะให้ Pages แสดงไฟล์ index.html โดยตรง
const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const root = __dirname;
const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml"
};

const server = http.createServer((req, res) => {
  const pathname = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
  const requested = pathname === "/" ? "/index.html" : pathname;
  const filePath = path.resolve(root, `.${requested}`);

  if (!filePath.startsWith(root + path.sep) && filePath !== path.join(root, "index.html")) {
    res.writeHead(403);
    return res.end("Forbidden");
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      return res.end("ไม่พบหน้าที่ต้องการ (404)");
    }
    res.writeHead(200, {
      "Content-Type": mime[path.extname(filePath)] || "application/octet-stream"
    });
    res.end(content);
  });
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`เปิดเว็บไซต์ได้ที่ http://localhost:${port}`);
});
