import IPasswordCrypt from '../contracts/services/i-password-crypt';

export default class PasswordCryptMemory implements IPasswordCrypt {
  async encrypt(password: string): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(password), 200);
    });
  }

  async compare(password: string, encryptedPassword: string): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(password === encryptedPassword), 200);
    });
  }
}