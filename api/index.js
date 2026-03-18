// Vercel maps `api/index.js` to the `/api` route.
// This re-exports the existing Express app.
const app = require("./server");

module.exports = app;

