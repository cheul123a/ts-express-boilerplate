import { serviceFunc } from "../service/service"
import catchAsync from "../utils/catchAsync";


const controllerFunc = catchAsync((req, res, next) => {
    res.send(serviceFunc());
});


export {
    controllerFunc
}