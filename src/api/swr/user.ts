import client from './fetcher';

export const getUser = () => {
  return client('/api/user');
};
