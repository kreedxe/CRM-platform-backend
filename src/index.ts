
import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import errorHandler from "./middlewares/errorHandler.middleware";
import clientidMiddleware from "./middlewares/clientid.middleware";
import asyncHandler from "./middlewares/asyncHandler.middleware";


// load environment variables
dotenv.config();


const app: Application = express();
const port = process.env.PORT || 9000;


// setup public directory
app.use(express.static(path.join(__dirname, 'public')));


// parse application/json
app.use(express.json({ limit: "10mb" }));


// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


// setup cors
app.use(cors());


app.use(asyncHandler(clientidMiddleware.verify));


// route setup


// error-handling middleware
app.use(errorHandler);

// start server
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
