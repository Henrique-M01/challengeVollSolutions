import express from 'express';
import cors from 'cors';
import errorMiddleware from './middlewares/errorMiddlewares';
import indexRouter from './Routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(indexRouter)
app.use(errorMiddleware)

export default app;
