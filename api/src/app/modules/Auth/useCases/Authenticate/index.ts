
import AppError from '../../../../error';
import Crypt from '../../../../providers/Crypt';
import generateToken from '../../../../utils/generateToken';
import UserRepository from '../../../User/repositories/implementation/UserRepository';

export default async function Authenticate(email: string, password: string) {
  const findUser = await UserRepository.findByEmail(email);
  if (!findUser) throw new AppError('User not found!', 404);

  if (
    !(await Crypt.matchPassword(password, findUser.password))
  ) throw new AppError('User not found!', 404);

  findUser.password = '';

  return {
    user: findUser,
    token: generateToken(findUser._id)
  };
}
