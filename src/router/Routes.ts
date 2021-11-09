import express from 'express';
import { controllerFunc } from '../controller/controller';
import validate from '../middlewares/validate';
import { validateRoot } from '../validators/validator';

const router =  express.Router();


router
    .route("/")
    .get(validate(validateRoot), controllerFunc);



export default router;