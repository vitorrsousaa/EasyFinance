import { model, Schema, HydratedDocument } from 'mongoose';
import Crypt from '../../../providers/Crypt';

type UserInfos = {
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}
export type TUser = HydratedDocument<UserInfos>

const UserSchema = new Schema<TUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.pre('save', async function (next) {
  const hash = await Crypt.hash(this.password);

  this.password = hash;
  next();
});

const User = model<TUser>('User', UserSchema);
export default User;
