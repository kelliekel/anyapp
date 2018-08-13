import { ANYAPP_COLOR, ANYAPP_BUTTON_TYPE } from "../components.types";
import { ElementRef, Renderer2, Injector } from "@angular/core";

export abstract class BaseButton {
    type: string;
    style: ANYAPP_BUTTON_TYPE;
    color: ANYAPP_COLOR;
    timeout: boolean;
    tooltip: string;
    disabled: boolean;
    timeoutThreshold: number;

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
}

// export interface IButtonComponent {
//     type: string;
//     style: ANYAPP_BUTTON_TYPE;
//     color: ANYAPP_COLOR;
//     timeout: boolean;
//     tooltip: string;
//     disabled: boolean;
// }