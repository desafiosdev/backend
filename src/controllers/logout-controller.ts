import ILogoutService from '../contracts/services/i-logout-service';
import * as path from 'path';

export default class LogoutController {
  constructor(
    private readonly service: ILogoutService,
  ) { }

  async handle(request, response) {
    const userId = localStorage.getItem('userId');

    if (!userId) {
      response.redirect('/login.html');
      return
    }

    try {
      await this.service.handle();

      response.sendFile(path.join(__dirname + '/views/login.html'));

    } catch (error) {
      response.sendFile(path.join(__dirname + `/views/logout.html?message=${error.message}`));
    }
  }
}