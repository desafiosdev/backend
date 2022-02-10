import { ServerError } from '../errors';
import { IHttpResponse } from '../protocols'

export const badRequest = (error: Error, file: string = null): IHttpResponse => {
  localStorage.setItem('error', error.message);

  return {
    statusCode: 400,
    body: error,
    file: file,
  }
}

export const serverError = (error: Error, file: string = null): IHttpResponse => {
  localStorage.setItem('error', error.message);

  return {
    statusCode: 500,
    body: new ServerError(error.stack),
    file: file,
  }
}

export const ok = (file: string, data: any = null): IHttpResponse => {
  localStorage.setItem('error', null);

  return {
    statusCode: 200,
    body: data,
    file: file,
  }
}

export const redirect = (file: string): IHttpResponse => {
  localStorage.setItem('error', null);

  return {
    statusCode: 302,
    body: null,
    file: file,
  }
}