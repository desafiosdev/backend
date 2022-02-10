import { Request, Response } from 'express';
import { IHttpRequest, IHttpResponse } from '../protocols';
import { Controller } from '../protocols/controller';
import * as path from 'path';

export const manipulateController = (factory: CallableFunction, req: Request, res: Response): void => {
  const params = req.params || [];
  const query = req.query || [];
  const body = params || query;
  const request: IHttpRequest = { body };

  const controller: Controller = factory();

  controller.handle(request).then((response: IHttpResponse) => {
    res = res.status(response.statusCode);
    if (response.statusCode === 302) {
      res.redirect(response.file || '');
      return;
    }
    let file = response.file || '';
    if (file) {
      file = file.indexOf('.') > -1 ? file : `${file}.html`;
      file = path.join(__dirname, '..', '..', 'views', file);
      res.sendFile(file, response.body);
      return;
    }
    res.json(response.body);
  });
}
