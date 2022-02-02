import ILogarUsuarioRepository from '../contracts/repositories/i-logar-usuario-repository';
import IPasswordCrypt from '../contracts/services/i-password-crypt';

export default class LogarUsuarioService {
  constructor(
    private readonly passwordCrypt: IPasswordCrypt,
    private readonly repository: ILogarUsuarioRepository,
  ) { }

  async getUserPorEmailESenha({ email, password }): Promise<string> {
    if (await this.repository.usuarioExists(email) === false) {
      throw new Error('Usuário não encontrado');
    }

    const encryptedPassword = await this.repository.getPassword(email);

    if (!(await this.passwordCrypt.compare(password, encryptedPassword))) {
      throw new Error('Senha incorreta');
    }

    return await this.repository.getUserId(email);
  }
}