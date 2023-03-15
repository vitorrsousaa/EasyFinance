import User, { TUser } from '../../model';
import { IUserRepository } from '../IUserRepository';

class UsersRepository implements IUserRepository {
  async create(
    name: string,
    email: string,
    password: string
  ): Promise<TUser> {
    return User.create({ email, name, password });
  }

  async findByEmail(email: string): Promise<TUser | null> {
    return User.findOne({ email }).select('+password');
  }

  async findById(id: string): Promise<TUser | null> {
    return User.findById(id);
  }
}

export default new UsersRepository();
