import express from "express";
import http from "http";
const app = express();

const server = http.createServer(app);

server.listen(8080, () => {
  console.log("server running");
});
