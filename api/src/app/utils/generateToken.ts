import authConfig from '../../config/auth.json';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

export default function generateToken(id: mongoose.Types.ObjectId) {
  return jwt.sign({ id: id.toString() }, authConfig.secret, {
    expiresIn: 36000,
  });
}
