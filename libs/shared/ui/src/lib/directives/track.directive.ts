import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[abUiTrack]',
})
export class TrackDirective {
  @Input('abUiTrack') param = '';

  constructor(private el: ElementRef) {}

  @HostListener('mouseover')
  onMouseOver() {
    this.trackUserAction('Mouse Over');
  }
  @HostListener('click')
  onClick() {
    this.trackUserAction('Click');
  }

  private trackUserAction(action: string) {
    console.log({
      category: 'UserInteraction',
      action: action,
      param: this.getParam(),
    });
  }
  private getParam() {
    if (this.param) return this.param;
    const host = this.el.nativeElement;
    return host.id || host.name || host.value || host.innerHTML || 'unknow';
  }
}
