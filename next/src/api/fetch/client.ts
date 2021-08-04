import { getCsrf } from '../../utils/auth';
type Main = {
  method: string;
  mode: RequestMode;
  credentials: RequestCredentials;
  headers: HeadersInit;
  body?: string;
};

const Client = <S, D>(url: string, method: string, data?: D): Promise<S> => {
  url = 'http://localhost:8080/api' + url;

  const headers: HeadersInit = new Headers();
  headers.set('Content-Type', 'application/json');
  headers.set('Accept', 'application/json');
  headers.set('X-CSRF-TOKEN', getCsrf());

  const main: Main = {
    method,
    mode: 'cors',
    credentials: 'include',
    headers,
  };

  if (method !== 'get') {
    main.body = JSON.stringify(data);
  }

  return fetch(url, main)
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      return Promise.resolve<S>(json);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

export default Client;
