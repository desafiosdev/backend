import CadastrarUsuarioController from '../controllers/cadastrar-usuario-controller';
import { Controller } from '../protocols/controller';
import CadastrarUsuariosRepository from '../repositories/memory/cadastrar-usuarios-memory-repository';
import CadastrarUsuariosService from '../services/cadastrar-usuarios-service';
import PasswordCryptMemory from '../services/memory/password-crypt-memory';

export const makeCadastrarUsuario = (): Controller => {
  const repository = new CadastrarUsuariosRepository();
  const service = new CadastrarUsuariosService(repository);
  const passwordCrypt = new PasswordCryptMemory();
  return new CadastrarUsuarioController(service, passwordCrypt);
}