import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { galleryInterface } from '@great-shared/interfaces/gallery.interface';

@Component({
  selector: 'app-great-single-gallery',
  templateUrl: './single-gallery.component.html',
  styleUrls: ['./single-gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleGalleryComponent {
  @Input() singleGallery: galleryInterface | undefined;
}
