import client from './client';

export const userLoginApi = (body = {}): Promise<Response> => {
  return client('/user/login', 'post', body);
};
