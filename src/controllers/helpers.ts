import { HttpResposta, HttpStatusCodigo} from "./interfaces-geral";

export const ok = <T>(body: any): HttpResposta<T> => ({
  statusCode: HttpStatusCodigo.OK,
  body,
});

export const created = <T>(body: any): HttpResposta<T> => ({
  statusCode: HttpStatusCodigo.CREATED,
  body,
});

export const badRequest = (message: string): HttpResposta<string> => {
  return {
    statusCode: HttpStatusCodigo.BAD_REQUEST,
    body: message,
  };
};

export const serverError = (): HttpResposta<string> => {
  return {
    statusCode: HttpStatusCodigo.SERVER_ERROR,
    body: "Something went wrong",
  };
};
