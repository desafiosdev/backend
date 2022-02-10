import CriarNovoItemService from '../services/criar-novo-item-service';

export default class CriarNovoItemController {
  constructor(
    private readonly service: CriarNovoItemService
  ) { }

  async handle(request, response) {
    try {
      if (!request.params.content) {
        throw new Error('Você precisa passar um conteúdo!');
      }

      const content = request.params.content;
      const usuarioId = localStorage.getItem('user_id');

      if (!usuarioId) {
        throw new Error('Você precisa estar logado para criar um novo item!');
      }

      const data = await this.service.execute(usuarioId, content);

      if (data instanceof Error) {
        throw new Error('Não foi possível criar o item: ' + data.message);
      }

      response.json({
        message: 'Item criado com sucesso!',
        body: {
          itemId: data,
          content,
        }
      });

    } catch (error) {
      response.json({
        message: error.message,
        body: {}
      }, 400);
    }
  }
}