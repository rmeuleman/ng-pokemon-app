import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pokemonBorderCard]'
})
export class BorderCardDirective {
  initialColor: string = "#f5f5f5";
  defaultColor: string = "blue"
  defaultHeight: string = "200px";

  constructor(private el: ElementRef) { 
    this.setHeight(this.height || this.defaultHeight);
    this.setBorder(this.initialColor);
  }

  @Input() pokemonBorderCard: string;
  @Input() height: string;
  
  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.pokemonBorderCard || this.defaultColor);  
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor);
  }

  private setHeight(height: string) {
    this.el.nativeElement.style.height = height;
  }

  private setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }

}
