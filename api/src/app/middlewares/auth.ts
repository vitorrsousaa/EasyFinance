import { NextFunction, request, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import authConfig from '../../config/auth.json';

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
    throw new Error('not authorizations');
  }

  // Verificar se o token esta no formato JWT

  const parts = authHeader.split(' ');

  if (!(parts.length === 2)) {
    return res.status(401).send({ error: 'Token error' });
  }

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).send({ error: 'Token malformatted' });
  }

  try {
    const payload = jwt.verify(token, authConfig.secret) as PayloadProps;

    request.user = { id: payload.id };

    next();
  } catch (error) {
    return res.status(401).send({ error: 'Token invalid error' });
  }
}
