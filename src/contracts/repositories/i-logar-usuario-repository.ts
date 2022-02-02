export default interface ILogarUsuarioRepository {
  usuarioExists(email: string): Promise<boolean>;

  getPassword(email: string): Promise<string>;

  getUserId(email: string): Promise<string>;
}