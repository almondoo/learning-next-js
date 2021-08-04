import client from './client';

const RegisterApi = (body = {}) => {
  return client('/register', 'POST', body);
};

export default RegisterApi;
