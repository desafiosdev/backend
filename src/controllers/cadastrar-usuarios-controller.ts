import ICadastrarUsuariosRepository from '../contracts/repositories/i-cadastrar-usuarios-repository';
import * as path from 'path';

export default class CadastrarUsuariosController {
  constructor(
    private readonly repository: ICadastrarUsuariosRepository
  ) { }

  async handle(request, response) {
    try {
      if (!request.params.name || !request.params.email || !request.params.password) {
        throw new Error('Você precisa passar todos os parâmetros!');
      }

      const { name, email, password } = request.params;

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
      response.sendFile(path.join(__dirname + '/views/dashboard.html'));

    } catch (error) {
      response.sendFile(path.join(__dirname + `/views/cadastro.html?message=${error.message}`));
    }
  }
}
