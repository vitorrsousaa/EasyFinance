import bcrypt from 'bcryptjs';

class crypt {
  hash(value: string) {
    return bcrypt.hash(value, 10);
  }

  matchPassword(value: string, hashedValue: string) {
    return bcrypt.compare(value, hashedValue);
  }
}

export default new crypt();
