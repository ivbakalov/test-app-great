import { postResponseInterface } from '@great-shared/interfaces/posts.interface';
import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map, Observable, EMPTY } from 'rxjs';
import { postServiceInterface } from './interfaces/posts-service-interface';
import { ResponseInterface } from '@great-shared/interfaces/response.interface';
import { API_TOKEN } from '../injector-tokens/api-requests.token';
import { MethodCaching } from '../decorators/method-caching.decorator';

@Injectable({
  providedIn: 'root',
})
export class PostsService implements postServiceInterface {
  constructor(private _http: HttpClient, @Inject(API_TOKEN) private _API_TOKEN: string) {}

  @MethodCaching({ ttl: 60 * 1000 })
  getPosts({ page }: { page?: number }): Observable<postResponseInterface | undefined> {
    let params: HttpParams = new HttpParams();

    if (page) params = params.set('page', page);

    return this._http.get<ResponseInterface<postResponseInterface | undefined>>(`${this._API_TOKEN}/posts`, { params }).pipe(
      map((posts) => posts?.data),
      catchError(() => {
        return EMPTY;

        // Do something if error occure
      })
    );
  }
}
