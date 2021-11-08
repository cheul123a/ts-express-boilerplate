import {ErrorRequestHandler} from 'express';
import httpStatus from 'http-status';
import ApiError from './ApiError';


const errorConverter: ErrorRequestHandler = (err, req, res, next) => {
    let errorInstance = err;
    if(!(err instanceof ApiError)){
		const statusCode = httpStatus.INTERNAL_SERVER_ERROR;
        const message = err.message || httpStatus[statusCode];

        errorInstance = new ApiError(statusCode, message, false);
    };

    next(errorInstance);
};

const errorHandler: ErrorRequestHandler = (err: ApiError, req, res, next) => {
	let {statusCode, message} = err;

	if(process.env.NODE_ENV === "production" && !err.isOperational){
		statusCode = httpStatus.INTERNAL_SERVER_ERROR;
        message = httpStatus[statusCode] as string;
	};
    
	const response = {
		code: statusCode,
		message
	};


	res.status(statusCode)
	   .send(response);
};


export {
	errorConverter,
	errorHandler
}