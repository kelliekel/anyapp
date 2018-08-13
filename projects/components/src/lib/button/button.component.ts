import { Component, OnInit, HostListener, ElementRef, Renderer2, Input, Inject, Injector } from '@angular/core';
import { AnyAppFormControl } from '../form-control';
import { ANYAPP_BUTTON_TYPE, ANYAPP_COLOR } from '../components.types';

@Component({
  selector: 'aa-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent extends AnyAppFormControl implements OnInit {
  @Input() type: string = 'button';
  @Input() style: ANYAPP_BUTTON_TYPE = 'default'
  @Input() color: ANYAPP_COLOR = 'basic';

  @Input() timeout: boolean;

  constructor(
    _injector: Injector,
    private renderer: Renderer2, 
    private el: ElementRef) {
      super(_injector);
      this.timeout = this.config.buttonConfig.buttonTimeoutThreshold > 0;
  }

  ngOnInit() {
    this.initializeForm();
  }

  @HostListener('click', ['$event'])
  submitAttachedForm(event: Event) {
    if (this.form != null && this.type == "button") { // if form is set and type is button
      this.form.onSubmit(event); // this will also update the submitted state
      //this.form.ngSubmit.next(true);
      //this.form.ngSubmit.emit(event);
    }

    // make sure a user can not click the button multiple times within a limited time
    this.handleButtonTimeoutTreshold();
  }

  private handleButtonTimeoutTreshold() {
    if (this.timeout) {
      setTimeout(() => {
        this.setDisabled(true);
        setTimeout(() => { this.setDisabled(null); }, this.config.buttonConfig.buttonTimeoutThreshold);
      }, 0);
    }
  }

  private setDisabled(disabled: boolean) {
    if (disabled)
      this.renderer.setAttribute(this.el.nativeElement.children["button"], "disabled", disabled.toString());
    else
      this.renderer.removeAttribute(this.el.nativeElement.children["button"], "disabled");
  }
}