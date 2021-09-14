import express from 'express';
import { indexRouter } from './routes';
import AppMiddleware from './middleware/index';

const app = express();

AppMiddleware(app);

app.use('/', indexRouter);

export default app;
