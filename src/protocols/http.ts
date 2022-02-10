export interface IHttpRequest {
  body?: any;
}

export interface IHttpResponse {
  body?: any;
  file?: string;
  statusCode: number;
}