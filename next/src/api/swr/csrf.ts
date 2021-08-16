import fetcher from './fetcher';
import { GET_CSRF } from '../url';
import useSWR from 'swr';

//- apiの返却値
export type CsrfApi = {
  data: {
    csrf: string;
  };
  status: string;
};

export const getCsrfApi = () => {
  return fetcher<CsrfApi>(GET_CSRF);
};

type UseCsrf = {
  csrf?: string;
  isLoading: boolean;
  error?: Error;
};

//- 商品一覧使い回し
export const useCsrf = (initialData?: CsrfApi): UseCsrf => {
  const url = GET_CSRF;
  const { data, error } = useSWR<CsrfApi, Error>(url, () => getCsrfApi(), {
    initialData,
  });

  return {
    csrf: data?.data.csrf,
    isLoading: !error && !data,
    error,
  };
};
