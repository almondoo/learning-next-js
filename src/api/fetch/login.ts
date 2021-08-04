import client from './client';

export const userLoginApi = (body = {}) => {
  return client('/user/login', 'post', body);
};
