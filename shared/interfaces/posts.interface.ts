import { paginatorInterface } from './paginator.interface';
export interface postsInterface {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface postResponseInterface extends paginatorInterface {
  data: Array<postsInterface>;
}
