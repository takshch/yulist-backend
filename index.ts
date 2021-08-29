import express from 'express';

const app = express();
const port = 8070;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log("server started at port: " + port);
});
