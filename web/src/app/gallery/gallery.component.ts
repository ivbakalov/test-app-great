import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PAGINATOR_SIZE } from '@great-shared/configs/paginator-size.config';
import { galleryResponseInterface } from '@great-shared/interfaces/gallery.interface';

import { GalleryService } from '@great-web/shared/services/gallery.service';
import { filter, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-great-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryComponent implements OnInit {
  gallery$: Observable<galleryResponseInterface | undefined>;
  galleryPage: number;
  paginatorSize = PAGINATOR_SIZE;

  constructor(private _galleryService: GalleryService, private _activatedRoute: ActivatedRoute, private _router: Router) {}

  ngOnInit(): void {
    this.gallery$ = this._activatedRoute.queryParams.pipe(
      filter((params) => !this.galleryPage || +params?.galleryPage !== this.galleryPage),
      switchMap((gallery: Params) => {
        this.galleryPage = gallery?.galleryPage ? +gallery?.galleryPage : this.galleryPage;

        return this._galleryService.getGallery({ galleryPage: this.galleryPage ? this.galleryPage : 1 });
      })
    );
  }

  onPaginationChange(event: PageEvent) {
    void this._router.navigate([], {
      replaceUrl: true,
      queryParams: {
        galleryPage: event.pageIndex + 1,
      },
      queryParamsHandling: 'merge',
    });
  }
}
