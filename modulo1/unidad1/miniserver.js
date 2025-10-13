// miniserver.js
// Simple static file server. Run with: node miniserver.js
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const HOST = '127.0.0.1';
const BASE_DIR = path.resolve(__dirname);

const MIME = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain'
};

const server = http.createServer((req, res) => {
  try {
    // Use URL to correctly parse encoded characters
    const url = new URL(req.url, `http://${req.headers.host}`);
    let pathname = decodeURIComponent(url.pathname);
    if (pathname === '/') pathname = '/index.html';

    const safePath = path.normalize(path.join(BASE_DIR, pathname));

    // prevent path traversal
    if (!safePath.startsWith(BASE_DIR)) {
      res.writeHead(403, { 'Content-Type': 'text/plain' });
      res.end('Forbidden');
      return;
    }

    fs.stat(safePath, (err, stats) => {
      if (err || !stats.isFile()) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
        return;
      }

      const ext = path.extname(safePath).toLowerCase();
      const contentType = MIME[ext] || 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': contentType });

      const stream = fs.createReadStream(safePath);
      stream.pipe(res);
      stream.on('error', () => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Server Error');
      });
    });
  } catch (e) {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('Bad Request');
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Listening on ${HOST}:${PORT}`);
  console.log(`Serving files from ${BASE_DIR}`);
});
