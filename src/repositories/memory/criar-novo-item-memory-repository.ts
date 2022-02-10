import ICriarNovoItemRepository from '../../contracts/repositories/i-criar-novo-item-repository';

export default class CriarNovoItemMemoryRepository implements ICriarNovoItemRepository {
  private items: Array<{ id: string, usuarioId: string, content: string }> = [];

  async execute(usuarioId: string, content: string): Promise<string> {
    return new Promise((resolve) => {
      const itemId = 'any_id';
      this.items.push({
        id: itemId,
        usuarioId,
        content,
      });
      resolve(itemId.toString());
    });
  }
}