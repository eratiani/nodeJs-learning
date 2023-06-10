const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to our home page");
    return;
  }
  if (req.url === "/about") {
    res.end("here is our short story");
    return;
  }
  res.end(
    ` <h1>ooops!</h1>
    <p> page not fount</p>
    <a href='../'>go back</a>`
  );
});
server.listen(5000);
