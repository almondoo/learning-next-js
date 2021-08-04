export type ArticleList = {
  id: number;
  thumbnail: string;
  title: string;
  createdAt: string;
};

export type ArticleDetail = {
  id: number;
  userId: number;
  title: string;
  thumbnail: string;
  text: string;
  createdAt: string;
};

export type Error = {
  error: {
    main: string;
  };
};
