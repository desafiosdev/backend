import HomeController from '../controllers/home-controller';
import { Controller } from '../protocols/controller';

export const makeHome = (): Controller => {
  return new HomeController();
}