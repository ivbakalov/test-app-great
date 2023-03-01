import { postResponseInterface } from '@great-shared/interfaces/posts.interface';
import { Observable } from 'rxjs';

export interface postServiceInterface {
  getPosts({ page }: { page?: number }): Observable<postResponseInterface | undefined>;
}
