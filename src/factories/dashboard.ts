import DashboardController from '../controllers/dashboard-controller';
import { Controller } from '../protocols/controller';
import DashboardMemoryRepository from '../repositories/memory/dashboard-memory-repository';
import DasboardService from '../services/dashboard-service';
import AvatarMemoryService from '../services/memory/avatar-memory-service';

export const makeDashboard = (): Controller => {
  const repository = new DashboardMemoryRepository();
  const avatarService = new AvatarMemoryService();
  const service = new DasboardService(repository, avatarService);
  return new DashboardController(service);
}