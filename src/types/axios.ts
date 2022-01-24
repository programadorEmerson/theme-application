type DataResponse = {
  statusCode: number;
  message: string;
};

type Response = {
  status: number;
  statusText: string;
};

export type APIError = {
  response: Response & { data: DataResponse };
};
