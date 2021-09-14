import express, { Router } from 'express';
import { default as listRoute } from './list';
const app = express();

app.use('/list', listRoute);

export { app as indexRouter };
