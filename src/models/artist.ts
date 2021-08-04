import type { ArtistCategory } from './artistCategory';

export type Artist = {
  id: number;
  category: ArtistCategory;
  name: string;
  uniqueName: string;
  icon: string;
};

export type ArtistDetail = Artist & {
  comment: string;
  createdAt: string;
};
