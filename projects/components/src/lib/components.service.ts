import { MatSnackBar, MatSnackBarConfig, MatSnackBarRef, SimpleSnackBar, MatDialog, MatDialogRef } from '@angular/material';
import { Injectable } from '@angular/core';
import { AnyAppComponentsConfig } from './components.config';
import { Subject } from 'rxjs';
import { ANYAPP_DEFAULT_COMPONENTS_CONFIG } from "./components.config.default";
import { ANYAPP_COMPONENTS_CONFIG } from './components.config';
import { ConfirmComponent } from './controls/confirm/confirm.component';

@Injectable()
export class ComponentsService {  
  public config: AnyAppComponentsConfig;
  public sideNavToggle: Subject<boolean> = new Subject<boolean>();

  constructor(
    _config: ANYAPP_COMPONENTS_CONFIG,
    private _snackbar: MatSnackBar,
    private _dialog: MatDialog) { 
      this.config = this._mergeConfig(_config)
  }

  public showMessage(message: string, action: string) : MatSnackBarRef<SimpleSnackBar> {
    return this._snackbar.open(message, action, <MatSnackBarConfig>{
      duration: this.config.messageDuration
    });
  }

  public confirm(callbackFn: any) {
    //confirmationDialogRef: MatDialogRef<ConfirmComponent>;
    let confirmationDialogRef = this._dialog.open(ConfirmComponent, {
      disableClose: false
    });
    // this._confirmationDialogRef.componentInstance.confirmMessage = "Are you sure you want to delete?"
    confirmationDialogRef.afterClosed().subscribe(result => {      
      callbackFn(result);
      confirmationDialogRef = null;
    });
  }

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
