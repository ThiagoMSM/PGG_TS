import express from 'express';
import { Request, Response } from 'express';
import routes from './routes';
import cors from 'cors';
const app = express(); 

//npm install

app.use(express.json()); 
app.use(cors());
app.use(routes);

app.get('/', (req: Request,res:Response) => {
    res.send('teste');
});

app.listen(4000, () => {
    console.log('listening on port 4000');
});