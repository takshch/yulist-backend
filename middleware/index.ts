import express from 'express';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import { default as boom } from 'express-boom';

const AppMiddleware = (app: any) => {
  // Middleware for sending error responses with express response object. To be required above all middlewares
  app.use(boom());

  // Request parsing middlewares
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());

  // Initialise authentication middleware
  app.use(passport.initialize());
};

export default AppMiddleware;
