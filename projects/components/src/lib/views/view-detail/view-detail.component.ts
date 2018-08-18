import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AnyAppControl } from '../../field/field-control';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'aa-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.scss']
})
export class ViewDetailComponent implements OnInit {

  @Input() title: string;
  @Input() subTitle: string;

  @Input() formControls: AnyAppControl[];
  @Input() formData: any;
  @Output() onSubmit: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  
  constructor() { }

  ngOnInit() {
  }

  submitForm(event: any) {
    this.onSubmit.emit(event);
  }
}
