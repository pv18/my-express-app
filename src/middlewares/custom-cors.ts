import { NextFunction, Request, Response } from 'express';

const allowedOrigins = ['https://www.w3.org']; // Разрешенные источники CORS

export const customCors = (req: Request, res: Response, next: NextFunction) => {
  const origin = req.headers.origin ?? '';

  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');

  next();
};
