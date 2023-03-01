import { AfterContentInit, Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';
import { menuSizesType } from '@great-web/shared/types/menu-sizes.type';

@Directive({
  selector: '[appGreatResizeLinks]',
})
export class ResizeLinksDirective implements AfterContentInit {
  @Output() menuStyleEmitter = new EventEmitter<menuSizesType>();

  private _sizeConfig = 320;

  constructor(private _elementRef: ElementRef<HTMLElement>) {}

  ngAfterContentInit(): void {
    setTimeout(() => {
      this._resize();
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this._resize();
  }

  private _resize() {
    if (this._elementRef.nativeElement.offsetWidth <= this._sizeConfig) {
      this.menuStyleEmitter.emit('mobile');
    } else {
      this.menuStyleEmitter.emit('desktop');
    }
  }
}
