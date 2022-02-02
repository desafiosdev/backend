import ICadastrarUsuariosRepository from '../contracts/repositories/i-cadastrar-usuarios-repository';

export default class CadastrarUsuariosController {
  constructor(
    private readonly repository: ICadastrarUsuariosRepository
  ) { }

  handle(request, response) {
    const { name, email, password } = request.body;

    const responseData = this.repository.execute({ name, email, password });

    responseData
      .then(data => response.json(data))
      .catch(error => response.json(error.message));
  }
}
