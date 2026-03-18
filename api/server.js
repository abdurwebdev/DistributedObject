const express = require("express");
const app = express();

function sayHello() {
  return "Hello from Server!";
}

app.get("/hello", (req, res) => {
  const result = sayHello();
  res.json({ message: result });
});

// app.listen(3000, () => {
//   console.log("Server running on port 3000");
// });

module.exports = app;