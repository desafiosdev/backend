export default interface ICadastrarUsuariosRepository {
  execute(data): Promise<string | Error>;
}