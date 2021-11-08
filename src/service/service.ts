import httpStatus from "http-status";
import ApiError from "../error/ApiError";

const serviceFunc = () =>{
    console.log("imservice", process.env.SERVER_PORT);

    return process.env.SERVER_PORT;
}



export {
    serviceFunc
}