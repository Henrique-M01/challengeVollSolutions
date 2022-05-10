import express from 'express';
import errorMiddleware from './middlewares/errorMiddlewares';
import indexRouter from './Routes';

const app = express();

app.use(express.json());
app.use(indexRouter)
app.use(errorMiddleware)

export default app;
