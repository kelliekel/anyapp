import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, IterableDiffers, IterableDiffer } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AnyAppControl } from '../field/field-control';
import { DynamicFormService } from './dynamic-form.service';

@Component({
  selector: 'aa-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit, OnChanges {
  dynamicForm: FormGroup;
  controls: AnyAppControl[];

  @Input() saveButton: boolean = true;
  @Input() resetButton: boolean = true; // settings;

  @Input() formControls: AnyAppControl[];
  @Input() formData: any;
  @Output() onSubmit: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  private _differ: IterableDiffer<AnyAppControl>;

  constructor(
    private _fb: FormBuilder,
    private _dfService: DynamicFormService,
    private _iterableDiffers: IterableDiffers
  ) {    
    this._differ = this._iterableDiffers.find([]).create(null);
  }

  ngOnInit() {

  }

  ngDoCheck() {
    let changes = this._differ.diff(this.formControls);
    if (changes) {     
      // todo: find changes and update only the changes?
      console.log('docheck');
      this.createForm();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes) {
      if (changes['formControls'] && changes['formControls'].currentValue) {
        //if(this.dynamicForm == null) {
          this.createForm();
        //}
        // see ngDoCheck because of array
      console.log('formControls');
      }
      if (changes['formData'] && changes['formData'].currentValue) {
        console.log('formData');
        this.updateFormValues(this.formData);
      }
    }
  }

  submit() {
    this.onSubmit.emit(this.dynamicForm);
  }

  createForm() {
    this.controls = this.formControls.map(x => Object.assign({}, x));
    this.dynamicForm = this._dfService.createForm(this._fb, this.formControls);
  }

  updateFormValues(values: any) {
    console.log(this.dynamicForm);
    this.dynamicForm.patchValue(values);
  }
}
