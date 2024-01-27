import { Type, Static } from "@sinclair/typebox";

const IHeader = Type.Object({
  "x-custom-key": Type.Optional(Type.String()),
});
type THeader = Static<typeof IHeader>;

const IParams = Type.Object({
  page: Type.Number({ default: 1 }),
  pageSize: Type.Number({ default: 10 }),
});
type TParams = Static<typeof IParams>;

const IQuerystring = Type.Object({
  filter: Type.Optional(Type.String()),
});
type TQuerystring = Static<typeof IQuerystring>;

const IBody = Type.Object({
  name: Type.String(),
  age: Type.Number(),
});
type TBody = Static<typeof IBody>;

const IResponse = Type.Object({
  name: Type.String(),
  age: Type.Number(),
});
type TResponse = Static<typeof IResponse>;

const IError = Type.Object({
  statusCode: Type.Number(),
  error: Type.String(),
  message: Type.String(),
});
type TError = Static<typeof IError>;

export type ServiceSchema = {
  Header: THeader;
  Params: TParams;
  Querystring: TQuerystring;
  Body: TBody;
  Response: TResponse;
  Error: TError;
};

export const schema = {
  tags: ["template"],
  deprecated: false,
  summary: "template",
  description: "template",
  headers: IHeader,
  params: IParams,
  querystring: IQuerystring,
  // body: IBody,
  response: {
    200: IResponse,
    400: IError,
    500: IError,
  },
};
