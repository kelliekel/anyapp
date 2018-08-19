import { Directive, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[mask]'
})
export class MaskDirective implements OnInit {
  @Input('mask') mask: string;

  // constructor(private renderer: Renderer2, private el: ElementRef) {
    
  // }

  ngOnInit() {
    // debugger;
    // if(this.mask) {

    //   if(maskmod) {
    //     this.renderer.setProperty(this.el, 'mask', this.mask);
    //   }
    // }
  }
}
