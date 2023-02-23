import { NextFunction, Request, Response } from "express";
import {
  AppError,
  BadRequestError,
  createError,
  InternalServerError,
  NotFoundError,
} from "../errors/ErrorFactory";

function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  let statusCode = 500;
  let error: AppError;

  if (err instanceof NotFoundError) {
    statusCode = 404;
    error = createError("NotFoundError", {
      message: err.message,
      code: err.code,
    });
  } else if (err instanceof BadRequestError) {
    statusCode = 400;
    error = createError("BadRequestError", {
      message: err.message,
      code: err.code,
    });
  } else if (err instanceof InternalServerError) {
    statusCode = 500;
    error = createError("InternalServerError", {
      message: err.message,
      code: err.code,
    });
  } else {
    error = createError("InternalServerError", {
      message: err.message || "An unknown error occurred",
      code: "UNKNOWN_ERROR",
    });
  }

  res.status(statusCode).json({ error });
}

export { errorHandler };
