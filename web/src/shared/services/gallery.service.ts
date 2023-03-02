import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { ResponseInterface } from '@great-shared/interfaces/response.interface';
import { API_TOKEN } from '../injector-tokens/api-requests.token';
import { galleryServiceInterface } from './interfaces/gallery-service-interface';
import { galleryResponseInterface } from '@great-shared/interfaces/gallery.interface';
import { MethodCaching } from '../decorators/method-caching.decorator';

@Injectable({
  providedIn: 'root',
})
export class GalleryService implements galleryServiceInterface {
  constructor(private _http: HttpClient, @Inject(API_TOKEN) private _API_TOKEN: string) {}

  @MethodCaching({ ttl: 60 * 1000 })
  getGallery({ galleryPage }: { galleryPage?: number }): Observable<galleryResponseInterface | undefined> {
    let params: HttpParams = new HttpParams();

    if (galleryPage) params = params.set('galleryPage', galleryPage);

    return this._http.get<ResponseInterface<galleryResponseInterface>>(`${this._API_TOKEN}/gallery`, { params }).pipe(
      map((posts) => posts?.data),
      catchError(() => {
        return EMPTY;

        // Do something if error occure
      })
    );
  }
}
