export default interface IPasswordCrypt {
  encrypt(password: string): Promise<string>;

  compare(password: string, cryptedPassword: string): Promise<boolean>;
}