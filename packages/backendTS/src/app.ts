import 'tsconfig-paths/register';
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import usuarioRouter from './routers/usuarioRouter';
import authRouter from './routers/authRouter';
import path from 'path';
import { errorMiddleware } from './middlewares/errorMiddleware';
import { authMiddleware } from './middlewares/authMiddleware';

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

apiRouter.use("/auth", authRouter);


apiRouter.use(authMiddleware)
apiRouter.use("/usuario", usuarioRouter);
apiRouter.get('/', (req: Request,res:Response) => {
    res.send('teste');
});

app.use("/api", apiRouter);
app.use(errorMiddleware)
export default app;

