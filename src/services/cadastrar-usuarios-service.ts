import CadastrarUsuariosAttrs from '../attrs/cadastrar-usuario-attrs';
import ICadastrarUsuariosRepository from '../contracts/repositories/i-cadastrar-usuarios-repository';

export default class CadastrarUsuariosService {
  constructor(
    private readonly repository: ICadastrarUsuariosRepository,
  ) { }

  public async emailExists(email: string): Promise<boolean> {
    const usuario = await this.repository.emailExists(email);
    return !!usuario;
  }

  public async execute({ name, email, password }: CadastrarUsuariosAttrs): Promise<CadastrarUsuariosAttrs> {
    const response: string = await this.repository.execute({ name, email, password });

    return { id: response, name, email, password };
  }
}