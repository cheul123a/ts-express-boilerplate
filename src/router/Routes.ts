import express from 'express';
import { controllerFunc } from '../controller/controller';
import { validateRoot } from '../validators/validator';

const router =  express.Router();


router
    .route("/")
    .get(controllerFunc);



export default router;