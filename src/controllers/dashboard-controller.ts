import DasboardService from '../services/dashboard-service';
import * as path from 'path';

export default class DashboardController {
  constructor(
    private readonly service: DasboardService,
  ) { }

  async handle(request, response) {
    localStorage.setItem('message', null);
    localStorage.setItem('items', JSON.stringify([]));

    const userId = localStorage.getItem('userId');

    if (!userId) {
      response.redirect('/login.html');
      return
    }

    try {
      const user: { id, name, avatar } = await this.service.getUserById(userId);
      if (!localStorage.getItem('name')) localStorage.setItem('name', user.name);
      if (!localStorage.getItem('avatar')) localStorage.setItem('avatar', user.avatar);

      const items = await this.service.getUserItems(userId);
      localStorage.setItem('items', JSON.stringify(items));

      response.sendFile(path.join(__dirname + '/views/dashboard.html'));

    } catch (error) {
      localStorage.setItem('message', error.message);

      response.sendFile(path.join(__dirname + `/views/dashboard.html`));
    }
  }

}