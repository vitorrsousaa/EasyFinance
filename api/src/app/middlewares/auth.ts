import { NextFunction, request, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import authConfig from '../../config/auth.json';
import AppError from '../error';

interface PayloadProps {
  id: string;
}

export default function authValidate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError('not authorizations', 401);
  }

  // Verificar se o token esta no formato JWT

  const parts = authHeader.split(' ');

  if (!(parts.length === 2)) throw new AppError('Token error', 401);

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme)) throw new AppError('Token malformatted', 400);

  try {
    const payload = jwt.verify(token, authConfig.secret) as PayloadProps;

    request.user = { id: payload.id };

    next();
  } catch (error) {
    return res.status(401).send({ error: 'Token invalid error' });
  }
}
