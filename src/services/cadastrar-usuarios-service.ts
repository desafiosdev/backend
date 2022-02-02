import CadastrarUsuariosAttrs from '../attrs/cadastrar-usuario-attrs';
import ICadastrarUsuariosRepository from '../contracts/repositories/i-cadastrar-usuarios-repository';

export default class CadastrarUsuariosService {
  constructor(
    private readonly repository: ICadastrarUsuariosRepository,
  ) { }

  public async execute({ name, email, password }: CadastrarUsuariosAttrs): Promise<CadastrarUsuariosAttrs | Error> {
    const response: string | Error = await this.repository.execute({ name, email, password });

    if (response instanceof Error) {
      return response;
    }

    return { id: response, name, email, password };
  }
}