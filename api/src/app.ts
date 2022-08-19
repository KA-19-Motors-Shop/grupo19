import express from "express";
import dotenv from "dotenv";
import ErrorMiddlewares from "./middlewares/error.middlewares";
import "express-async-errors";

//import routes from "./routes"
dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});
//app.use(routes);
app.use(ErrorMiddlewares);

export default app;
