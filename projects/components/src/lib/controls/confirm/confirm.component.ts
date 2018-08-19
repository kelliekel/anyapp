import { Component, Input, OnInit, Injector } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AnyAppBaseControl } from '../../base-control';

@Component({
  selector: 'aa-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: []
})
export class ConfirmComponent /*extends AnyAppBaseControl*/ implements OnInit {
  public confirmTitle: string = "Confirm";
  public confirmMessage: string = "Are you sure?";

  constructor(
    //_injector: Injector,
    public dialogRef: MatDialogRef<ConfirmComponent>) {
      //super(_injector);
  }

  ngOnInit() {

  }
}
