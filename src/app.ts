import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import httpStatus from 'http-status';
import path from 'path';
import ApiError from './error/ApiError';
import { errorConverter, errorHandler } from './error/errorHandler';
import router from './router/Routes';

dotenv.config({
    path: path.join(__dirname, process.env.NODE_ENV === 'production' ? '../.env.prod' : '../.env.dev')
})

const app = express();

app.use(helmet());
app.use(express.json());

app.use("/api", router)  

app.use((req, res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});


// ApiError가 아닐시 변환
app.use(errorConverter);

// 에러 핸들링
app.use(errorHandler);

app.listen(process.env.SERVER_PORT,()=>{
    console.log(`server listening on ${process.env.SERVER_PORT}`)
})




// 에러 핸들링
// catchAsync
// ApiError