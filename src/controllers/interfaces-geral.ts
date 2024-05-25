export interface HttpResposta<T> {
    statusCode: HttpStatusCodigo;
    body: T;
  }
  
  export interface HttpRequisicao<B> {
    params?: any;
    headers?: any;
    body?: B;
  }
  
  export enum HttpStatusCodigo {
    OK = 200,
    CREATED = 201,
    BAD_REQUEST = 400,
    SERVER_ERROR = 500,
  }
  
  export interface IController {
    funcao(httpRequest: HttpRequisicao<unknown>): Promise<HttpResposta<unknown>>;
  }
