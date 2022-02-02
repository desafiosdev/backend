import ICadastrarUsuariosRepository from '../../contracts/repositories/i-cadastrar-usuarios-repository';

export default class CadastrarUsuariosRepository implements ICadastrarUsuariosRepository {
  async execute({ name, email, password }): Promise<string> {
    const id = 'any_id';

    return new Promise(resolve => setTimeout(() => resolve(id), 1000));
  }

  async emailExists(email: string): Promise<boolean> {
    return new Promise(resolve => setTimeout(() => resolve(false), 1000));
  }
}