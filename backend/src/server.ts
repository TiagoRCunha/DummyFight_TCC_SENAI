import express from "express";

import Cors from "./middleware/cors";

const router = express.Router();

router.use(Cors);

router.options("*", Cors);


const server = express();

server.get("/", (_, res) => {
  res.send("Hello ts-node!");
});

export default server;