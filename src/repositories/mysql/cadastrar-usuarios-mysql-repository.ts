import ICadastrarUsuariosRepository from '../../contracts/repositories/i-cadastrar-usuarios-repository';

export default class CadastrarUsuariosMysqlRepository implements ICadastrarUsuariosRepository {
  constructor() { }

  async execute({ name, email, password }): Promise<string | Error> {
    const id = 'any_id';

    // conecta ao banco de dados

    return new Promise(resolve => resolve(id));
  }
}