import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import ApiError from './error/ApiError';
import router from './router/Routes';

dotenv.config({
    path: path.join(__dirname, process.env.NODE_ENV === 'production' ? '../.env.prod' : '../.env.dev')
})

const app = express();

app.use(express.json());
app.use("/api", router)

// ssl server
// const options = {
//     ca: fs.readFileSync('ssl-fullchain.pem'),
//     key: fs.readFileSync(path.resolve(process.cwd(), 'ssl-privkey.pem'), 'utf8').toString(),
//     cert: fs.readFileSync(path.resolve(process.cwd(), 'ssl-cert.pem'), 'utf8').toString(),
// };
  
// https.createServer(options, app).listen(443,()=>{
//     console.log("start");
// });
  

app.listen(process.env.SERVER_PORT,()=>{
    console.log('start')
})