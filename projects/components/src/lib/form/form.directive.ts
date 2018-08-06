import { Directive, OnInit, OnChanges, Input, Inject, Output, EventEmitter, Injector } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AnyAppEventModel, AnyAppEventKeys } from '../components.model';
import { AnyAppBaseControl } from '../base-control';

@Directive({
  selector: '[aa-comp-form]'
})
export class FormDirective extends AnyAppBaseControl implements OnInit, OnChanges {
  @Input() aaCompForm: NgForm;
  @Input() reset: boolean;
  @Input() invalidFormMessage: string;

  constructor(
    _injector: Injector) {
      super(_injector);
  }

  ngOnInit() {
    if(this.aaCompForm != null) {
      this.aaCompForm.ngSubmit.subscribe((data) => {
        if(this.aaCompForm.valid == false) {
          var sb = this.componentsService.showMessage(this.config.errorMessages.invalidFormMessage, null);
          sb.onAction().subscribe(x => {
            this.onEvent.emit(new AnyAppEventModel(AnyAppEventKeys.MESSAGE_CLICK))
          });
        } 
      });
    }
  }

  ngOnChanges() {
    if(this.reset == true) {
      this.aaCompForm.resetForm();
    }
  }
}
