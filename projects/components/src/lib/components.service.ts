import { MatSnackBar, MatSnackBarConfig, MatSnackBarRef, SimpleSnackBar } from '@angular/material';
import { Injectable, Inject } from '@angular/core';
import { ANYAPP_COMPONENTS_CONFIG, AnyAppComponentsConfig } from './components.config';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {  
  public sideNavToggle: Subject<boolean> = new Subject<boolean>();

  constructor(
    @Inject(ANYAPP_COMPONENTS_CONFIG) private config: AnyAppComponentsConfig,
    private _snackbar: MatSnackBar) { 
  }

  public showMessage(message: string, action: string) : MatSnackBarRef<SimpleSnackBar> {
    return this._snackbar.open(message, action, <MatSnackBarConfig>{
      duration: this.config.messageDuration
    });
  }
}
