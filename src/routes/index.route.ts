import express from "express";
import healthRouter from "./health.route";
import accountRouter from "./account.route";

const routes = express.Router();

routes.use("/health", healthRouter);
routes.use("/auth", accountRouter);

export default routes;
