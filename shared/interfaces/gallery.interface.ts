import { paginatorInterface } from './paginator.interface';

export interface galleryInterface {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface galleryResponseInterface extends paginatorInterface {
  data: Array<galleryInterface>;
}
