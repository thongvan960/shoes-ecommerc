import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/MongoDb.js";
import ImportData from "./DataImport.js";
import productRoute from "./Routes/ProductRoutes.js";
import { errorHandler, notFound } from "./Middleware/Errors.js";
import userRouter from "./Routes/UserRoutes.js";
import orderRouter from "./Routes/orderRoutes.js";
import cors from 'cors'


dotenv.config();
connectDatabase();
const app = express();
app.use(express.json())
app.use(cors())

// API
app.get("/", (req, res) => {
  res.send("server is run")
})
app.use("/api/import", ImportData);
app.use("/api/products", productRoute);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
app.get("/api/config/paypal", (req, res) => {
  res.send("AevyZYtvebW_N9ewOaTuye3viYQdxWKBKPYlpCkgc1icmRy83ncxyfIF9pgrs8akWSftJg7BhjLT8WG4");
});

// ERROR HANDLER
app.use(notFound);
app.use(errorHandler);



app.listen(process.env.PORT || 3000, console.log(`server run`));


