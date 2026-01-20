
import express, { Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import errorHandler from "./middlewares/errorHandler.middleware";
import clientidMiddleware from "./middlewares/clientid.middleware";
import asyncHandler from "./middlewares/asyncHandler.middleware";
import notFound from "./middlewares/notFound.middleware";
import routes from "./routes/index.route";


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


// client ID verification
app.use(asyncHandler(clientidMiddleware.verify));


// route setup
app.use("/api", routes);


// handle 404 not found error
app.use(notFound);


// error-handling middleware
app.use(errorHandler);


// start server
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});