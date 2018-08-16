import { Component, OnInit, ViewChild, ComponentRef, ViewContainerRef, ElementRef, ComponentFactoryResolver, Input, OnChanges, SimpleChanges, Injector, forwardRef } from '@angular/core';
import { AnyAppModelControl } from '../model-control';
import { ANYAPP_FIELD_TYPE, ANYAPP_FIELD_TYPE_MAPPINGS } from '../components.types';
import { FormControl, NgForm, NG_VALUE_ACCESSOR } from '@angular/forms';

export class TypeSpecificProperties {
  maxLength;
  placeholder;
  type;
  multiple;
  min;
  max;
  step;
  minlength;
  maxlength;
  items;
  locale;
}

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
  
  // field
  @Input() fieldType: ANYAPP_FIELD_TYPE;
  // form
  @Input() form: NgForm; // form contains formgroup
  @Input() formControlName: string;
  @Input() formControl: FormControl;
  @Input() disabled: boolean;
  @Input() tooltip: string;
  // model
  @Input() label: string;
  @Input() hint: string;
  // type specific
  @Input() typeSpecific: TypeSpecificProperties;

  constructor(
    _injector: Injector,
    private componentFactoryResolver: ComponentFactoryResolver) {
      super(_injector);
    }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes) {
      if(!this.componentRef || (changes["fieldType"] && changes["fieldType"].currentValue != changes["fieldType"].previousValue)) {
        this._destroyField();
        this._createField();
      }

      if(this.componentRef) { 
        this._updateField();
      }
    }
  }

  private _createField() {
    if(this.fieldType) {
      let componentType = ANYAPP_FIELD_TYPE_MAPPINGS[this.fieldType];
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
    instance.label = this.label;
    instance.hint = this.hint;
    instance.tooltip = this.tooltip;
    instance.disabled = this.disabled;
    instance.form = this.form;
    instance.formControl = this.formControl;
    instance.formControlName = this.formControlName;
    //
    if(this.typeSpecific) {
      instance["placeholder"] = this.typeSpecific.placeholder;
      instance["type"] = this.typeSpecific.type;
      instance["min"] = this.typeSpecific.min;
      instance["max"] = this.typeSpecific.max;
      instance["step"] = this.typeSpecific.step;
      instance["minLength"] = this.typeSpecific.minlength;
      instance["multiple"] = this.typeSpecific.multiple;
      instance["items"] = this.typeSpecific.items;
      instance["locale"] = this.typeSpecific.locale;
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
