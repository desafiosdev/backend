import { Controller } from '../protocols/controller';
import { IHttpRequest, IHttpResponse } from '../protocols';
import { ok, badRequest } from '../helpers/http-helpers';
import CadastrarUsuariosService from '../services/cadastrar-usuarios-service';
import CadastrarUsuariosAttrs from '../attrs/cadastrar-usuario-attrs';
import IPasswordCrypt from '../contracts/services/i-password-crypt';

export default class CadastrarUsuarioController implements Controller {
  constructor(
    private readonly service: CadastrarUsuariosService,
    private readonly passwordCrypt: IPasswordCrypt,
  ) { }

  async handle(request: IHttpRequest): Promise<IHttpResponse> {
    try {
      if (!request.body.name || !request.body.email || !request.body.password) {
        throw new Error('Você precisa passar todos os parâmetros!');
      }

      let { name, email, password } = request.body;

      if (email.test(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) === false) {
        throw new Error('Email inválido!');
      }

      if (password.length < 8) {
        throw new Error('A senha deve ter no mínimo 8 caracteres!');
      }

      if (name.length < 3) {
        throw new Error('O nome deve ter no mínimo 3 caracteres!');
      }

      if (await this.service.emailExists(email)) {
        throw new Error('Email já cadastrado!');
      }

      password = await this.passwordCrypt.encrypt(password);

      const usuario: CadastrarUsuariosAttrs = await this.service.execute({ name, email, password });
      // localStorage.setItem('user_id', usuario.id);

      return ok('dashboard', {
        user: {
          id: usuario.id,
          name,
          email,
        },
      });

    } catch (error) {
      return badRequest(error as Error, 'cadastro');
    }
  }
}
