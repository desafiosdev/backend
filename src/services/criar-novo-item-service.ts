import ICriarNovoItemRepository from '../contracts/repositories/i-criar-novo-item-repository';

export default class CriarNovoItemService {
  constructor(
    private readonly repository: ICriarNovoItemRepository
  ) { }

  async execute(usuarioId: string, content: string): Promise<string | Error> {
    return await this.repository.execute(usuarioId, content);
  }
}