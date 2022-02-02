import ILogarUsuarioRepository from '../../contracts/repositories/i-logar-usuario-repository';

export default class LogarUsuarioMysqlRepository implements ILogarUsuarioRepository {
  async usuarioExists(email: string): Promise<boolean> {
    return new Promise((resolve) => resolve(true));
  }

  async getPassword(email: string): Promise<string> {
    return new Promise((resolve) => resolve('any_password'));
  }

  async getUserId(email: string): Promise<string> {
    return new Promise((resolve) => resolve('any_user_id'));
  }
}