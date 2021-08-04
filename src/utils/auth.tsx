const accessToken = 'access_token';
const refreshToken = 'refresh_token';
const intendedUrl = 'intendedUrl';
const defaultIntendedUrl = '/dashboard';
const csrfToken = 'csrf_token';

export const getAccessToken = () => window.localStorage.getItem(accessToken);
export const getRefreshToken = () => window.localStorage.getItem(refreshToken);

export const setAccessToken = (token: string): void => {
  token
    ? window.localStorage.setItem(accessToken, token)
    : window.localStorage.removeItem(accessToken);
};
export const setRefreshToken = (token: string): void => {
  token
    ? window.localStorage.setItem(refreshToken, token)
    : window.localStorage.removeItem(refreshToken);
};

export const getIntendedUrl = (): string =>
  window.localStorage.getItem(intendedUrl) || defaultIntendedUrl;

export const setIntendedUrl = (url: string): void => {
  url ? window.localStorage.setItem(intendedUrl, url) : window.localStorage.removeItem(intendedUrl);
};

export const setCookieCsrf = (): void => {
  const cookies = document.cookie;
  const cookiesArray = cookies.split(';');

  let csrf = '';
  for (const c of cookiesArray) {
    const cArray = c.split('=');
    if (cArray[0] == '_csrf') {
      const cookie = cArray[1];
      if (cookie) {
        csrf = cookie;
      }
    }
  }
  if (!csrf) {
    setCsrf(csrf);
  }
};

export const getCsrf = (): string => {
  const cookies = document.cookie;
  const cookiesArray = cookies.split(';');

  let csrf = '';
  for (const c of cookiesArray) {
    const cArray = c.split('=');
    if (cArray[0] == '_csrf') {
      const cookie = cArray[1];
      if (cookie) {
        csrf = cookie;
      }
    }
  }
  return csrf;
};

// export const getCsrf = (): string => window.localStorage.getItem(csrfToken) || '';

export const setCsrf = (token: string): void => {
  token ? window.localStorage.setItem(csrfToken, token) : window.localStorage.removeItem(csrfToken);
};
