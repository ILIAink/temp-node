const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our homepage");
    return;
  }

  if (req.url === "/about") {
    res.end("Welcome to the about page");
    return;
  }

  res.end(`<div>
    <h1>Oops! This doesn't exist</h1>
    <a href="/">Go back home</a>
    </div>`);
});

server.listen(5000);
