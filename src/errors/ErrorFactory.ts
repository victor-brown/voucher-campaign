type ErrorType = "NotFoundError" | "BadRequestError" | "InternalServerError";

interface ErrorOptions {
  message?: string;
  code?: string;
}

class AppError {
  code: string;
  message: string;

  constructor(message: string, code: string) {
    this.message = message;
    this.code = code;
  }
}

class NotFoundError extends AppError {
  constructor(message: string = "Resource not found") {
    super(message, "NOT_FOUND_ERROR");
  }
}

class BadRequestError extends AppError {
  constructor(message: string = "Bad request") {
    super(message, "BAD_REQUEST_ERROR");
  }
}

class InternalServerError extends AppError {
  constructor(message: string = "Internal server error") {
    super(message, "INTERNAL_SERVER_ERROR");
  }
}

function createError(type: ErrorType, options: ErrorOptions = {}): AppError {
  const { message, code } = options;

  switch (type) {
    case "NotFoundError":
      return new NotFoundError(message);
    case "BadRequestError":
      return new BadRequestError(message);
    case "InternalServerError":
      return new InternalServerError(message);
    default:
      return new InternalServerError("Unknown error");
  }
}

export {
  createError,
  AppError,
  NotFoundError,
  BadRequestError,
  InternalServerError,
};
