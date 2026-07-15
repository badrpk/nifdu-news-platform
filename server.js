const http = require("http");
const port = process.env.PORT || 8765;
const server = http.createServer((req, res) => {
  const body = JSON.stringify({
    ok: true,
    service: "nifdu-news-platform",
    title: "NIFDU News Platform",
    description: "News aggregation & editorial CMS with multi-source feeds — media product, not programming language.",
    health: "pass",
    path: req.url,
  }, null, 2);
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(body);
});
if (require.main === module) {
  server.listen(port, "127.0.0.1", () => console.log("NIFDU News Platform on http://127.0.0.1:" + port));
}
module.exports = { server };
