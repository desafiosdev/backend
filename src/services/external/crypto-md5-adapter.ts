import IEncrypterService from '../../contracts/services/i-encrypter-service';
import crypto from 'crypto';

export default class CryptoMd5Adapter implements IEncrypterService {
  public hash(value: string): Promise<string> {
    return new Promise((resolve) => {
      const hash = crypto.createHash('md5').update(value).digest('hex');

      resolve(hash);
    });
  }
}