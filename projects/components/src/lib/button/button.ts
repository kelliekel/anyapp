import { ANYAPP_COLOR, ANYAPP_BUTTON_TYPE } from "../components.types";
import { ElementRef, Renderer2, Injector, HostListener } from "@angular/core";
import { NgForm } from "@angular/forms";

export abstract class BaseButton {
  type: string;
  style: ANYAPP_BUTTON_TYPE;
  color: ANYAPP_COLOR;
  timeout: boolean;
  tooltip: string;
  disabled: boolean;
  timeoutThreshold: number;
  form: NgForm;

  private renderer: Renderer2;
  private el: ElementRef;

  constructor(_injector: Injector) {
    this.renderer = _injector.get(Renderer2);
    this.el = _injector.get(ElementRef);
  }

  handleButtonTimeoutTreshold() {
    if (this.timeout) {
      setTimeout(() => {
        this.setDisabled(true);
        setTimeout(() => { this.setDisabled(null); }, this.timeoutThreshold);
      }, 0);
    }
  }

  setDisabled(disabled: boolean) {
    if (disabled)
      this.renderer.setAttribute(this.el.nativeElement.children["button"], "disabled", disabled.toString());
    else
      this.renderer.removeAttribute(this.el.nativeElement.children["button"], "disabled");
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
}

// export interface IButtonComponent {
//     type: string;
//     style: ANYAPP_BUTTON_TYPE;
//     color: ANYAPP_COLOR;
//     timeout: boolean;
//     tooltip: string;
//     disabled: boolean;
// }