import { GET_ARTICLE, GET_ARTICLE_DETAIL } from '../url';
import fetcher from './fetcher';
import useSWR from 'swr';
import type { ArticleList, ArticleDetail, Error } from '../../models/article';

export type ArticleListApi = {
  data: {
    articles: ArticleList[];
  };
  status: string;
};

export const getArticleApi = () => {
  return fetcher<ArticleListApi>(GET_ARTICLE);
};

type UseArticleList = {
  articles?: ArticleList[];
  isLoading: boolean;
  error?: Error;
};

export const useArticleList = (initialData?: ArticleListApi): UseArticleList => {
  const url = GET_ARTICLE;
  const { data, error } = useSWR<ArticleListApi, Error>(url, () => getArticleApi(), {
    initialData,
  });

  return {
    articles: data?.data.articles,
    isLoading: !error && !data,
    error,
  };
};

export type ArticleDetailApi = {
  data: {
    article: ArticleDetail;
  };
  status: string;
};

export const getArticleDetailApi = (id: number) => {
  return fetcher<ArticleDetailApi>(GET_ARTICLE_DETAIL + String(id));
};

type UseArticleDetail = {
  article?: ArticleDetail;
  isLoading: boolean;
  error?: Error;
};

export const useArticleDetail = (id: number, initialData?: ArticleDetailApi): UseArticleDetail => {
  const url = GET_ARTICLE_DETAIL + String(id);
  const { data, error } = useSWR<ArticleDetailApi, Error>(url, () => getArticleDetailApi(id), {
    initialData,
  });

  return {
    article: data?.data.article,
    isLoading: !error && !data,
    error,
  };
};
