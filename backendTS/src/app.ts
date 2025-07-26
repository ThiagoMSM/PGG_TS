import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import path from 'path';
import usuarioRouter from './routers/usuarioRouter';

//npm install
const app = express(); 


app.use(cors());
app.use(helmet());
app.use(express.json()); 
app.use(express.static(path.join(__dirname, "client", "build")));

const apiRouter = express.Router();

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

app.get(/^\/(?!api).*/, (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

apiRouter.get('/', (req: Request,res:Response) => {
    res.send('teste');
});

apiRouter.use("/usuario", usuarioRouter);

app.use("/api", apiRouter);
export default app;