import LogoutController from '../controllers/logout-controller';
import { Controller } from '../protocols/controller';
import LogoutService from '../services/logout-service';

export const makeLogout = (): Controller => {
  const service = new LogoutService();
  return new LogoutController(service);
}