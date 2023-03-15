import AppError from '../../../../error';
import generateToken from '../../../../utils/generateToken';
import UserRepository from '../../../User/repositories/implementation/UserRepository';

export default async function Register(
  email: string,
  name: string,
  password: string
) {
  const userExists = await UserRepository.findByEmail(email);
  if (userExists) throw new AppError('User already exists!');

  const newUser = await UserRepository.create(name, email, password);
  newUser.password = '';

  return {
    user: newUser,
    token: generateToken(newUser._id)
  };
}
