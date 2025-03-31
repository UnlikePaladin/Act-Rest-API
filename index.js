import "dotenv/config";
import express from "express";
import indexRoutes from "./routes/index.routes.js";
import userRoutes from "./routes/users.routes.js";
import cors from "cors";
import loginRoutes from "./routes/login.routes.js";
import morgan from "morgan";

const app = express();
const port = 5000;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(indexRoutes);
app.use(userRoutes);
app.use(loginRoutes);

app.listen(port, console.log("http://localhost:"+ port));