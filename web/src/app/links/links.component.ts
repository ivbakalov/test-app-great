import { ChangeDetectionStrategy, Component } from '@angular/core';
import { menuSizesType } from '@great-web/shared/types/menu-sizes.type';

@Component({
  selector: 'app-great-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinksComponent {
  device: menuSizesType = 'desktop';
}
