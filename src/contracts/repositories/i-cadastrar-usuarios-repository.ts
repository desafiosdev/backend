export default interface ICadastrarUsuariosRepository {
  execute(data: { name: string, email: string, password: string }): Promise<string>;

  emailExists(email: string): Promise<boolean>;
}