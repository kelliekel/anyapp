import { Component, OnInit, HostListener, ElementRef, Renderer2, Input, Injector, ComponentRef, 
  ComponentFactoryResolver, ViewContainerRef, ViewChild, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { AnyAppFormControl } from '../../form-control';
import { ANYAPP_BUTTON_TYPE, ANYAPP_COLOR } from '../../components.types';
import { BaseButton } from './button';
import { RaisedButtonComponent } from './_raised-button.component';
import { DefaultButtonComponent } from './_default-button.component';
import { FabButtonComponent } from './_fab-button.component';
import { FlatButtonComponent } from './_flat-button.component';
import { IconButtonComponent } from './_icon-button.component';
import { StrokedButtonComponent } from './_stroked-button.component';

// https://medium.com/@DenysVuika/dynamic-content-in-angular-2-3c85023d9c36
//
@Component({
  selector: 'aa-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent extends AnyAppFormControl implements OnInit, OnChanges {
  @Input() type: string = 'button';
  @Input() style: ANYAPP_BUTTON_TYPE = 'default'
  @Input() color: ANYAPP_COLOR = 'basic';
  @Input() timeout: boolean;

  private componentRef: ComponentRef<BaseButton>;
  @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;
  @ViewChild('transclude') transclude: ElementRef;

  private mappings = {
    'default': DefaultButtonComponent,
    'fab': FabButtonComponent,
    'flat': FlatButtonComponent,
    'icon': IconButtonComponent,
    'raised': RaisedButtonComponent,
    'stroked': StrokedButtonComponent,
  };

  constructor(
    _injector: Injector,
    private renderer: Renderer2, 
    private el: ElementRef,
    private componentFactoryResolver: ComponentFactoryResolver) {
      super(_injector);
      this.timeout = this.config.buttonConfig.buttonTimeoutThreshold > 0;
  }

  ngOnInit() {
    this.initializeForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes) {
      if(!this.componentRef || (changes["style"] && changes["style"].currentValue != changes["style"].previousValue)) {
        this._destroyButton();
        this._createButton();
      }

      if(this.componentRef) { 
        this._updateButton();
      }
    }
  }

  private _createButton() {
    if(this.style) {
      let componentType = this.mappings[this.style];
      if(componentType) {
        let factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
        this.componentRef = this.container.createComponent(factory, 0, undefined, [
            [ this.transclude.nativeElement ]
        ]);
      }
    }
  }

  private _updateButton() {
    let instance = <BaseButton>this.componentRef.instance;
    instance.color = this.color;
    instance.style = this.style;
    instance.type = this.type;
    instance.disabled = this.disabled;
    instance.tooltip = this.tooltip;
    instance.timeout = this.timeout;
    instance.timeoutThreshold = this.config.buttonConfig.buttonTimeoutThreshold;
    instance.form = this.form;
  }

  private _destroyButton() {
    if (this.componentRef) {
        this.componentRef.destroy();
        this.componentRef = null;
    }
  }

  ngOnDestroy() {
    this._destroyButton();
  }
}