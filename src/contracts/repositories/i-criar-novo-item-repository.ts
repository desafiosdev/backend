export default interface ICriarNovoItemRepository {
  execute(usuarioId: string, content: string): Promise<string>;
}