import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import Joi from 'joi';
import ApiError from '../error/ApiError';
import pick from '../utils/pick';

const validate = (schema: ValidateSchema) => (req: Request, res: Response, next: NextFunction) => {
    const validSchemaKeys = Object.keys(schema);
    
    const reqKeys: Extract<keyof typeof req, string>[] = Object.keys(req) as Extract<keyof typeof req, "string">[];
    const object = pick(
        req,
        reqKeys.filter((value: string) => validSchemaKeys.includes(value))
    );
        
    const { value, error } = Joi.compile(schema)
    .prefs({errors: { label: 'key'}, abortEarly: false})
    .validate(object);

    if(error) {
        const errorMessage = error.details.map((details) => details.message).join(', ');
        return next(new ApiError(httpStatus.BAD_REQUEST, errorMessage));
    }

    return next();
}



export default validate;

type ValidateSchema = {
    params?: Joi.ObjectSchema,
    query?: Joi.ObjectSchema,
    body?: Joi.ObjectSchema
}
