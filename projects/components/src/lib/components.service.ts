import { MatSnackBar, MatSnackBarConfig, MatSnackBarRef, SimpleSnackBar } from '@angular/material';
import { Injectable, Inject, Optional, forwardRef } from '@angular/core';
import { AnyAppComponentsConfig } from './components.config';
import { Subject } from 'rxjs';
import { ANYAPP_DEFAULT_COMPONENTS_CONFIG } from "./components.config.default";
import { ANYAPP_COMPONENTS_CONFIG } from './components.config';

@Injectable(
  //{ providedIn: 'root' }
)
export class ComponentsService {  
  public config: AnyAppComponentsConfig;
  public sideNavToggle: Subject<boolean> = new Subject<boolean>();

  constructor(
    _config: ANYAPP_COMPONENTS_CONFIG,
    private _snackbar: MatSnackBar
    // ,
    // private _dfService: DynamicFormService
  ) { 
      this.config = this._mergeConfig(_config)
  }

  public showMessage(message: string, action: string) : MatSnackBarRef<SimpleSnackBar> {
    return this._snackbar.open(message, action, <MatSnackBarConfig>{
      duration: this.config.messageDuration
    });
  }

  // public createForm(fb: FormBuilder, dbForm: AnyAppDynamicControl[]) {
  //   return this._dfService.createForm(fb, dbForm);
  // }

  private _mergeConfig(config: AnyAppComponentsConfig): AnyAppComponentsConfig {
    if(config) {
      this._mergeObject(ANYAPP_DEFAULT_COMPONENTS_CONFIG, config);
    }
    else {
      config = ANYAPP_DEFAULT_COMPONENTS_CONFIG;
    }
    return config;
  }

  private _mergeObject(defaultConfigSection: any, configSection: any) {
    Object.keys(defaultConfigSection).forEach(key => {
      this._mergeProperty(defaultConfigSection, configSection, key);
      //
      if(defaultConfigSection[key] instanceof Object)
        this._mergeObject(defaultConfigSection[key], configSection[key])
    });
  }
  
  private _mergeProperty(defaultConfigSection: any, configSection: any, key: string) { 
    configSection[key] = configSection[key] || defaultConfigSection[key];
  }
}
