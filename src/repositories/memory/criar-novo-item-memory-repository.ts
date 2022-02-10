import ICriarNovoItemRepository from '../../contracts/repositories/i-criar-novo-item-repository';

export default class CriarNovoItemMemoryRepository implements ICriarNovoItemRepository {
  private items = [];

  async execute(usuarioId: string, content: string): Promise<string | Error> {
    return new Promise((resolve, reject) => {
      const itemId = this.items.length + 1;
      this.items.push({
        id: itemId,
        usuarioId,
        content,
      });
      resolve(itemId.toString());
    });
  }
}