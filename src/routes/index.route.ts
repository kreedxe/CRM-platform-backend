import express from "express";
import healthRouter from "./health.route";
import accountRouter from "./account.route";
import userRouter from "./user.routes";

const routes = express.Router();

routes.use("/health", healthRouter);
routes.use("/auth", accountRouter);
routes.use("/users", userRouter);

export default routes;
