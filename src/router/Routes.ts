import express from 'express';
import { controllerFunc } from '../controller/controller';

const router =  express.Router();


router.get("/", controllerFunc);



export default router;