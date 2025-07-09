import express from 'express';
import { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import helmet from 'helmet';

//npm install

dotenv.config();

const app = express(); 


app.use(cors());
app.use(helmet());
app.use(express.json()); 


if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

app.get('/', (req: Request,res:Response) => {
    res.send('teste');
});

export default app;