import ILogarUsuarioRepository from '../../contracts/repositories/i-logar-usuario-repository';

export default class LogarUsuarioMemoryRepository implements ILogarUsuarioRepository {
  async usuarioExists(email: string): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(email === 'email@example.com'), 1000);
    });
  }

  async getPassword(email: string): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => resolve('any_password'), 1000);
    });
  }

  async getUserId(email: string): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => resolve('any_user_id'), 1000);
    });
  }
}