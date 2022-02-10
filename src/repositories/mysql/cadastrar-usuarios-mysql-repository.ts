import ICadastrarUsuariosRepository from '../../contracts/repositories/i-cadastrar-usuarios-repository';

export default class CadastrarUsuariosMysqlRepository implements ICadastrarUsuariosRepository {
  constructor() { }

  async execute({ name, email, password }: { name: string, email: string, password: string }): Promise<string> {
    const id = 'any_id';

    // conecta ao banco de dados

    return new Promise(resolve => resolve(id));
  }

  async emailExists(email: string): Promise<boolean> {
    return new Promise(resolve => resolve(false));
  }
}