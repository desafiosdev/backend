import ICadastrarUsuariosRepository from '../contracts/repositories/i-cadastrar-usuarios-repository';
import { Controller } from '../protocols/controller';
import { IHttpRequest, IHttpResponse } from '../protocols';
import { ok, badRequest } from '../helpers/http-helpers';

export default class CadastrarUsuarioController implements Controller {
  constructor(
    private readonly repository: ICadastrarUsuariosRepository
  ) { }

  async handle(request: IHttpRequest): Promise<IHttpResponse> {
    try {
      if (!request.body.name || !request.body.email || !request.body.password) {
        throw new Error('Você precisa passar todos os parâmetros!');
      }

      const { name, email, password } = request.body;

      if (email.test(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) === false) {
        throw new Error('Email inválido!');
      }

      if (password.length < 8) {
        throw new Error('A senha deve ter no mínimo 8 caracteres!');
      }

      if (name.length < 3) {
        throw new Error('O nome deve ter no mínimo 3 caracteres!');
      }

      if (await this.repository.emailExists(email)) {
        throw new Error('Email já cadastrado!');
      }

      const usuarioId = await this.repository.execute({ name, email, password });
      localStorage.setItem('user_id', usuarioId);

      return ok('dashboard', {
        user: {
          id: usuarioId,
          name,
          email,
        },
      });

    } catch (error) {
      return badRequest(error, 'cadastro');
    }
  }
}
