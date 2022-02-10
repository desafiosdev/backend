import { ok, badRequest } from '../helpers/http-helpers';
import { IHttpRequest, IHttpResponse } from '../protocols';
import { Controller } from '../protocols/controller';
import CriarNovoItemService from '../services/criar-novo-item-service';

export default class CriarNovoItemController implements Controller {
  constructor(
    private readonly service: CriarNovoItemService
  ) { }

  async handle(request: IHttpRequest): Promise<IHttpResponse> {
    try {
      if (!request.body.content) {
        throw new Error('Você precisa passar um conteúdo!');
      }

      const content = request.body.content;
      const usuarioId = localStorage.getItem('user_id');

      if (!usuarioId) {
        throw new Error('Você precisa estar logado para criar um novo item!');
      }

      const itemId = await this.service.execute(usuarioId, content);

      return ok('dashboard', {
        message: 'Item criado com sucesso!',
        body: {
          itemId,
          content,
        }
      });

    } catch (error) {
      return badRequest(error);
    }
  }
}