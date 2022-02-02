import ILogarUsuarioRepository from '../contracts/repositories/i-logar-usuario-repository';
import * as path from 'path';
import LogarUsuarioService from '../services/logar-usuario-service';

export default class LogarUsuarioController {
  constructor(
    private readonly service: LogarUsuarioService,
  ) { }

  async handle(request, response) {
    try {
      if (!request.body.email || !request.body.password) {
        throw new Error('Dados inválidos');
      }

      const { email, password } = request.body;

      if (password.length < 5) {
        throw new Error('Senha muito curta');
      }

      if (email.test(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) === false) {
        throw new Error('Email inválido');
      }

      const userId = await this.service.getUserPorEmailESenha({ email, password });

      localStorage.setItem('userId', userId);
      response.sendFile(path.join(__dirname + `/views/dashboard.html`));

    } catch (error) {
      response.sendFile(path.join(__dirname + `/views/login.html?message=${error.message}`));
    }
  }
}