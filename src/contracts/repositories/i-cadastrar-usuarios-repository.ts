export default interface ICadastrarUsuariosRepository {
  execute(data): Promise<string>;

  emailExists(email): Promise<boolean>;
}