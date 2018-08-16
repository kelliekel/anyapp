import { Directive, OnInit, OnChanges, Input, Inject, Output, EventEmitter, Injector, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AnyAppEventModel, AnyAppEventKeys } from '../components.model';
import { AnyAppBaseControl } from '../base-control';

@Directive({
  selector: '[aaForm]'
})
export class FormDirective extends AnyAppBaseControl implements OnInit, OnChanges {
  @Input() aaForm: NgForm;
  
  @Input() reset: boolean;
  @Input() invalidFormMessage: string;

  constructor(
    _injector: Injector) {
      super(_injector);
      this.invalidFormMessage = this.config.locales.form_invalid;
  }

  ngOnInit() {
    if(this.aaForm != null) {
      this.aaForm.ngSubmit.subscribe((data) => {
        if(this.aaForm.valid == false) {
          var sb = this.componentsService.showMessage(this.config.errorMessages.invalidFormMessage, null);
          sb.onAction().subscribe(x => {
            this.onEvent.emit(new AnyAppEventModel(AnyAppEventKeys.MESSAGE_CLICK))
          });
        } 
      });
    }
  }

  resetForm() {
    this.aaForm.resetForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes && changes["reset"]) {
      if(changes["reset"].previousValue != changes["reset"].currentValue && changes["reset"].currentValue == true) {
        this.resetForm();
      }
    }
  }
}
