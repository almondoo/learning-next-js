type Main = {
  method: string;
  mode: RequestMode;
  credentials: RequestCredentials;
  headers: HeadersInit;
};

type ResTypes = {
  status: string;
};

const fetcher = <T extends ResTypes>(url: string): Promise<T> => {
  const headers: HeadersInit = new Headers();
  headers.set('Content-Type', 'application/json');
  headers.set('Accept', 'application/json');

  const main: Main = {
    method: 'get',
    mode: 'cors',
    credentials: 'include',
    headers,
  };

  const base = process.env.API_ENDPOINT || process.env.NEXT_PUBLIC_API_ENDPOINT;

  if (!base) {
    return Promise.reject<T>({ data: { error: 'jsエラー', status: 'ng' } });
  }

  return fetch(base + url, main)
    .then((res) => {
      return res.json();
    })
    .then((res: T) => {
      if (res.status === 'ok') {
        return Promise.resolve<T>(res);
      }
      return Promise.reject<T>(res);
    });
};

export default fetcher;
