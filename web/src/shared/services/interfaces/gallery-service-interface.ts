import { galleryResponseInterface } from '@great-shared/interfaces/gallery.interface';
import { Observable } from 'rxjs';

export interface galleryServiceInterface {
  getGallery({ galleryPage }: { galleryPage?: number }): Observable<galleryResponseInterface | undefined>;
}
