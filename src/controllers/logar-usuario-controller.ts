import LogarUsuarioService from '../services/logar-usuario-service';
import { Controller } from '../protocols/controller';
import { IHttpRequest, IHttpResponse } from '../protocols';
import { ok, badRequest } from '../helpers/http-helpers';

export default class LogarUsuarioController implements Controller {
  constructor(
    private readonly service: LogarUsuarioService,
  ) { }

  async handle(request: IHttpRequest): Promise<IHttpResponse> {
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
      // localStorage.setItem('userId', userId);

      return ok('dashboard', {
        user: {
          id: userId,
        },
      });

    } catch (error) {
      return badRequest(error as Error, 'login');
    }
  }
}