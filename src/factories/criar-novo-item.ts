import CriarNovoItemController from '../controllers/criar-novo-item-controller';
import { Controller } from '../protocols/controller';
import CriarNovoItemMemoryRepository from '../repositories/memory/criar-novo-item-memory-repository';
import CriarNovoItemService from '../services/criar-novo-item-service';

export const makeCriarNovoItem = (): Controller => {
  const repository = new CriarNovoItemMemoryRepository();
  const service = new CriarNovoItemService(repository);
  return new CriarNovoItemController(service);
}