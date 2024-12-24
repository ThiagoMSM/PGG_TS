import express from 'express';
import { Request, Response } from 'express';
// const routes = require('./routes')
// const cors = require('cors');
const app = express(); 

//npm install

app.use(express.json());
// app.use(cors());
// app.use(routes);

app.get('/', (req: Request,res:Response) => {
    res.send('testiculo');
});

app.listen(4000, () => {
    console.log('listening on port 4000');
});