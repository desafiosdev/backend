import { Request, Response } from 'express';
import { IHttpRequest, IHttpResponse } from '../protocols';
import { Controller } from '../protocols/controller';

export const manipulateController = (factory: CallableFunction, req: Request, res: Response): void => {
  let body = req.body;
  const params = req.params;
  const query = req.query;
  body = [].concat(body, params, query);
  const request: IHttpRequest = { body };

  const controller: Controller = factory();

  controller.handle(request).then((response: IHttpResponse) => {
    res = res.status(response.statusCode);
    if (response.statusCode === 302) {
      res.redirect(response.file);
      return;
    }
    if (response.file) {
      res.sendFile(response.file, response.body);
      return;
    }
    res.json(response.body);
  });
}
