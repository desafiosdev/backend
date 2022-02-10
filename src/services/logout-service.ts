import ILogoutService from '../contracts/services/i-logout-service';

export default class LogoutService implements ILogoutService {
  async handle(): Promise<void> {
    localStorage.setItem('userId', null);
    localStorage.setItem('name', null);
    localStorage.setItem('avatar', null);
  }
}