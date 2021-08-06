import type { ProductCategory } from './productCategory';
import type { Artist } from './artist';

//- 編集する時の
export type ProductEdit = {
  id: number;
  artistId: number;
  productCategoryId: number;
  title: string;
  thumbnail: string;
  price: number;
  description: string;
  verticalLength: number;
  horizontalLength: number;
  isPublished: number;
  productImages: string[];
};

//- ユーザー表示用の詳細
export type ProductDetail = {
  id: number;
  artist: Artist;
  category: ProductCategory;
  title: string;
  thumbnail: string;
  price: number;
  description: string;
  verticalLength: number;
  horizontalLength: number;
  isPublished: boolean;
  isSold: boolean;
  productImages: string[];
};

export type ProductTable = {
  id: number;
  title: string;
  price: number;
  isPublished: boolean;
  isSold: boolean;
};

export type Product = {
  id: number;
  ProductCategoryId: number;
  ProductCategory: ProductCategory;
  title: string;
  thumbnail: string;
  alt?: string;
  price: number;
  description: string;
  verticalLength: number;
  horizontalLength: number;
  isPublished: boolean;
  isSold?: boolean;
  productImages: string[];
};

export type ProductList = {
  id: number;
  alt: string;
  category: ProductCategory;
  thumbnail: string;
  title: string;
  price: number;
};

export type ProductAndArtistList = {
  id: number;
  alt: string;
  artist: Artist;
  category: ProductCategory;
  thumbnail: string;
  title: string;
  price: number;
};

export type AuthorMainProduct = {
  artistId: number;
  artId: number;
  icon: string;
  image: string;
  name: string;
  title: string;
  category: string;
};

export type KariProduct = {
  id: number;
  productHenre: {
    id: number;
    name: string;
  };
  title: string;
  thumbnail: string;
  price: number;
  description: string;
  verticalLength: number;
  horizontalLength: number;
  isPublished: boolean;
};
