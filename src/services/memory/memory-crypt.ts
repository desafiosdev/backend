import IEncrypterService from '../../contracts/services/i-encrypter-service';

export default class MemoryCrypt implements IEncrypterService {
  public async hash(value: string): Promise<string> {
    return value;
  }
}