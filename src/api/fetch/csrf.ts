import client from './client';

export type Success = {
  readonly data: {
    csrf: string;
  };
};

export const getCsrfApi = () => {
  return client<Success, never>('/first', 'get');
};
