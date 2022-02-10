import IPasswordCrypt from '../../contracts/services/i-password-crypt';
import * as bcrypt from 'bcrypt';

export default class PasswordBcryptAdapter implements IPasswordCrypt {
  private readonly saltRounds: number = 10;

  async encrypt(password: string): Promise<string> {
    return new Promise((resolve, reject) => {
      bcrypt.hash(password, this.saltRounds, (err, hash) => {
        if (err) {
          return reject(err);
        }

        return resolve(hash);
      });
    });
  }

  async compare(password: string, encryptedPassword: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, encryptedPassword, (err, result) => {
        if (err) {
          return reject(err);
        }

        return resolve(result);
      });
    });
  }
}