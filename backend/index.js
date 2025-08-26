import express from "express";
import dotenv from "dotenv";
import connect from "./connectDb.js";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoutes.js";
import cors from "cors";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/users", userRouter);
app.use("/products", productRouter);
connect();
app.listen(process.env.PORT, () => {
  console.log(`Server started`);
});
