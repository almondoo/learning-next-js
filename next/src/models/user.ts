//- author
export type ShortAuthor = {
  name: string;
  uniqueName: string;
  position: string;
  image: string;
};

export type AuthorSlider = {
  uniqueName: string;
  name: string;
  position: string;
  src: string;
};

//- user
export type User = {
  id: number;
  name: string;
  uniqueName: string;
  email: string;
  emailVerifiedAt?: Date;
  icon: string;
  comment?: string;
  isArtist: boolean;
};

//- artist
export type Artist = User & {
  ArtistCategoryId: number;
  comment: string;
};

export type Author = {
  id: number;
  artsit_genre: {
    id: number;
    name: string;
  };
  name: string;
  unique_name: string;
  email: string;
  icon: string;
  comment: string;
  is_artist: boolean;
  follows: string[];
  followers: string[];
};
