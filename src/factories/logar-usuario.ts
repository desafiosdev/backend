import LogarUsuarioController from '../controllers/logar-usuario-controller';
import { Controller } from '../protocols/controller';
import LogarUsuarioMemoryRepository from '../repositories/memory/logar-usuario-memory-repository';
import LogarUsuarioService from '../services/logar-usuario-service';
import PasswordCryptMemory from '../services/memory/password-crypt-memory';

export const makeLogarUsuario = (): Controller => {
  const passwordService = new PasswordCryptMemory();
  const repository = new LogarUsuarioMemoryRepository();
  const service = new LogarUsuarioService(passwordService, repository);
  return new LogarUsuarioController(service);
}