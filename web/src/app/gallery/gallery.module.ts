import { MatPaginatorModule } from '@angular/material/paginator';
import { SingleGalleryModule } from './single-gallery/single-gallery.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { GalleryRoutingModule } from './gallery.routing.module';

@NgModule({
  declarations: [GalleryComponent],
  imports: [CommonModule, GalleryRoutingModule, SingleGalleryModule, MatPaginatorModule],
  exports: [GalleryComponent],
})
export class GalleryModule {}
