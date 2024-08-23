import express from "express";
import helmet from "helmet";
import cors from "cors";
import { PORT, HOSTNAME } from "./config/constants";
import errorHandler, { ErrorResponse } from "./middlewares/errorhandler";

import apiRouter from "./features/api/routes";

const app = express();

app.use(cors());
app.use(express.static("public"));
app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Add API routes
app.use(apiRouter);

// 404 Error
app.use("*", (req, res) => {
    throw new ErrorResponse(404, `Can't ${req.method} ${req.originalUrl}`);
});

// Add error handler
app.use(errorHandler);

app.listen(PORT, HOSTNAME, () => console.log(`Server running on port ${PORT}`));