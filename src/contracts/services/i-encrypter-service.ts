export default interface IEncrypterService {
  hash(value: string): Promise<string>;
}