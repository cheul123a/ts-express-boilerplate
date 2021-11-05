import {Request, Response, NextFunction, ErrorRequestHandler} from 'express';
import httpStatus from 'http-status';
import ApiError from './ApiError';


const errorConverter: ErrorRequestHandler = (err, req, res, next) => {
    let errorInstance = err;
    if(!(err instanceof ApiError)){
        const messsage = err.message || httpStatus.INTERNAL_SERVER_ERROR;

        errorInstance = new ApiError(httpStatus.INTERNAL_SERVER_ERROR, messsage);
    }

    next(errorInstance);
}

const errorHandler: ErrorRequestHandler = (err: ApiError, req, res, next) => {

    

}


if (!(error instanceof ApiError)) {
    const statusCode =
      error.statusCode || error instanceof mongoose.Error ? httpStatus.BAD_REQUEST : httpStatus.INTERNAL_SERVER_ERROR;
    const message = error.message || httpStatus[statusCode];
    error = new ApiError(statusCode, message, false, err.stack);
  }