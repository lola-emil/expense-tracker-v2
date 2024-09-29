import express from "express";
import helmet from "helmet";
import cors from "cors";
import { PORT, HOSTNAME } from "./config/constants";
import errorHandler, { ErrorResponse } from "./middlewares/errorhandler";

import apiRouter from "./features/api/routes";
import documentAIRouter from "./features/document-ai/routes";
import Logger from "./utils/logger.util";

const app = express();

app.use(cors());
app.use(express.static("public"));
app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Add routers
app.use("/api", apiRouter);
app.use("/document-ai", documentAIRouter);

// 404 Error
app.use("*", (req, res) => {
    let message = `Can't ${req.method} ${req.originalUrl}`;
    Logger.error(message);
    throw new ErrorResponse(404, message);
});

// Add error handler
app.use(errorHandler);

app.listen(PORT, HOSTNAME, () => Logger.success(`Server running on http://${HOSTNAME}:${PORT}`));