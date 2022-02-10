import { ok } from '../helpers/http-helpers';
import { IHttpResponse } from '../protocols';
import { Controller } from '../protocols/controller';

export default class HomeController implements Controller {
  async handle(): Promise<IHttpResponse> {
    return ok('index');
  }
}
