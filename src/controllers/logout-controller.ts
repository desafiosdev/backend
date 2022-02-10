import ILogoutService from '../contracts/services/i-logout-service';
import { badRequest, ok, redirect } from '../helpers/http-helpers';
import { Controller } from '../protocols/controller';
import { IHttpResponse } from '../protocols';

export default class LogoutController implements Controller {
  constructor(
    private readonly service: ILogoutService,
  ) { }

  async handle(): Promise<IHttpResponse> {
    try {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        return redirect('login');
      }

      await this.service.handle();
      return ok('login');

    } catch (error) {
      return badRequest(error, 'logout');
    }
  }
}