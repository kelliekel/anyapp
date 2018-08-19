import { Component, OnInit, ViewChild, ComponentRef, ViewContainerRef, ElementRef, ComponentFactoryResolver, Input, OnChanges, SimpleChanges, Injector, forwardRef } from '@angular/core';
import { AnyAppModelControl } from '../model-control';
import { ANYAPP_FIELD_TYPE_MAPPINGS } from '../../components.types';
import { FormControl, NgForm, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AnyAppControl } from './field-control';

@Component({
  selector: 'aa-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss'],  
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR, //Angular internaly injects all values that are registered on the NG_VALUE_ACCESSOR token
      useExisting: forwardRef(() => FieldComponent),
      multi: true
    }
  ]
})
export class FieldComponent extends AnyAppModelControl implements OnInit, OnChanges {
  private componentRef: ComponentRef<AnyAppModelControl>;
  @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;
  @ViewChild('transclude') transclude: ElementRef;
    
  @Input() form: NgForm; // form contains formgroup
  @Input() formControlName: string;
  @Input() formControl: FormControl;
  @Input() fieldControl: AnyAppControl;

  constructor(
    _injector: Injector,
    private componentFactoryResolver: ComponentFactoryResolver) {
      super(_injector);
    }

  ngOnInit() {
    //this.initializeForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes) {
      if(!this.componentRef || (changes["fieldControl"])) {
        if(changes.fieldControl.previousValue == null || changes.fieldControl.currentValue.fieldType != changes.fieldControl.previousValue.fieldType) {
          this._destroyField();
          this._createField();
        }
      }

      if(this.componentRef) { 
        this._updateField();
      }
    }
  }

  private _createField() {
    if(this.fieldControl) {
      let componentType = ANYAPP_FIELD_TYPE_MAPPINGS[this.fieldControl.fieldType];
      if(componentType) {
        //let t = this.transclude;
        let factory = this.componentFactoryResolver.resolveComponentFactory<AnyAppModelControl>(componentType);
        this.componentRef = this.container.createComponent(factory, 0, undefined, [
            //[ this.transclude.nativeElement ]
        ]);
      }
    }
  }

  private _updateField() {
    let instance = this.componentRef.instance;
    instance.disabled = this.disabled;
    instance.form = this.form;
    instance.formControl = this.formControl;
    instance.formControlName = this.formControlName;
    
    if(this.fieldControl.properties) {
      Object.keys(this.fieldControl.properties).forEach(key => instance[key] = this.fieldControl.properties[key]);
    }
      
    // if(instance instanceof InputComponent) {
    //   let inputInstance = <InputComponent>instance;
    //   //inputInstance.maxLength = 
    //   inputInstance.placeholder = this.placeholder;
    // }
  }

  private _destroyField() {
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }

  ngOnDestroy() {
    this._destroyField();
  }
}
