import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material';
import { AnyAppComponentsConfig } from './components.config';
export declare class ComponentsService {
    private config;
    private _snackbar;
    constructor(config: AnyAppComponentsConfig, _snackbar: MatSnackBar);
    showMessage(message: string, action: string): MatSnackBarRef<SimpleSnackBar>;
}
