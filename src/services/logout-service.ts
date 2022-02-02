import ILogoutService from '../contracts/services/i-logout-service';

export default class LogoutService implements ILogoutService {
  handle(): Promise<void> {
    return new Promise(resolve => {
      localStorage.setItem('userId', '');
      localStorage.setItem('name', '');
      localStorage.setItem('avatar', '');

      resolve();
    });
  }
}