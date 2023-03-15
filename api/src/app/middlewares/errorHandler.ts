import { NextFunction, Request, Response } from 'express';
import AppError from '../error';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.log(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
};
