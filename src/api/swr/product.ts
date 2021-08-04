import type { ProductList, ProductDetail } from '../../models/product';
import { GET_PRODUCT, GET_PRODUCT_DETAIL } from '../url';
import fetcher from './fetcher';
import useSWR from 'swr';

/* 商品一覧 Start */
//- apiの返却値
export type ProductListApi = {
  data: {
    products: ProductList[];
  };
  status: string;
};

//- 商品一覧取得
export const getProductListApi = (page: number) => {
  return fetcher<ProductListApi>(GET_PRODUCT + `?page=${page}`);
};

//- useProductListApiの返り値
type UseProductList = {
  products?: ProductList[];
  isLoading: boolean;
  error?: Error;
};

//- 商品一覧使い回し
export const useProductList = (page: number, initialData?: ProductListApi): UseProductList => {
  const url = GET_PRODUCT;
  const { data, error } = useSWR<ProductListApi, Error>(url, () => getProductListApi(page), {
    initialData,
  });

  return {
    products: data?.data.products,
    isLoading: !error && !data,
    error,
  };
};
/* 商品一覧 End */

/* 商品詳細 Start */
//- apiの返却値
export type ProductDetailApi = {
  data: { product: ProductDetail };
  status: string;
};

//- 商品詳細取得
export const getProductDetailApi = (id: number) => {
  return fetcher<ProductDetailApi>(GET_PRODUCT_DETAIL + String(id));
};

//- useProductDetailの返り値
type UseProductDetail = {
  product?: ProductDetail;
  isLoading: boolean;
  error?: Error;
};

//- 商品詳細使い回し
export const useProductDetail = (id: number, initialData?: ProductDetailApi): UseProductDetail => {
  const url = GET_PRODUCT_DETAIL;
  const { data, error } = useSWR<ProductDetailApi, Error>(
    url + String(id),
    () => getProductDetailApi(id),
    {
      initialData,
    },
  );

  return {
    product: data?.data.product,
    isLoading: !error && !data,
    error,
  };
};
/* 商品詳細 End */

//- 管理商品詳細取得
export const getManageProductDetailApi = () => {
  return fetcher('/api/manage/product/detail');
};
