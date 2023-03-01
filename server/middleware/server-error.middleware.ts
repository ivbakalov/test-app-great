import { ResponseInterface } from '@great-shared/interfaces/response.interface';
import { ServerResponse } from 'http';

export const serverError = (res: ServerResponse) => {
  res.statusCode = 500;
  const response: ResponseInterface = {
    status: 500,
    message: 'Something went wrong, try again later!',
  };

  res.end(response);
  res.end();

  return;
};
