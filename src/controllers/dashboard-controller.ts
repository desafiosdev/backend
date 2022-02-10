import DasboardService from '../services/dashboard-service';
import { Controller } from '../protocols/controller';
import { IHttpResponse } from '../protocols';
import { ok, redirect, badRequest } from '../helpers/http-helpers';

export default class DashboardController implements Controller {
  constructor(
    private readonly service: DasboardService,
  ) { }

  async handle(): Promise<IHttpResponse> {
    localStorage.setItem('message', null);
    localStorage.setItem('items', JSON.stringify([]));

    const userId = localStorage.getItem('userId');

    if (!userId) {
      return redirect('login');
    }

    try {
      const user: { id, name, avatar } = await this.service.getUserById(userId);
      if (!localStorage.getItem('name')) localStorage.setItem('name', user.name);
      if (!localStorage.getItem('avatar')) localStorage.setItem('avatar', user.avatar);

      const items = await this.service.getUserItems(userId);
      localStorage.setItem('items', JSON.stringify(items));

      return ok('dashboard', { items });

    } catch (error) {
      return badRequest(error, 'dashboard');
    }
  }

}