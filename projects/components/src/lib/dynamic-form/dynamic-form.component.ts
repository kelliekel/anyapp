import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, IterableDiffers, IterableDiffer } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AnyAppDynamicControl } from './dynamic-control';
import { DynamicFormService } from './dynamic-form.service';

@Component({
  selector: 'aa-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit, OnChanges {
  dynamicForm: FormGroup;
  controls: AnyAppDynamicControl[];

  @Input() saveButton: boolean = true;
  @Input() resetButton: boolean = true; // settings;

  @Input() formControls: AnyAppDynamicControl[];
  @Input() formData: any;
  @Output() onSubmit: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  private _differ: IterableDiffer<AnyAppDynamicControl>;

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
      
      this.controls = this.formControls.map(x => Object.assign({}, x));
      this.dynamicForm = this._dfService.createForm(this._fb, this.formControls);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes) {
      if (changes['formControls'] && changes['formControls'].currentValue) {
        // see ngDoCheck because of array
      }
      if (changes['formData'] && changes['formData'].currentValue) {
        this.updateFormValues(this.formData);
      }
    }
  }

  submit() {
    this.onSubmit.emit(this.dynamicForm);
  }

  updateFormValues(values: any) {
    this.dynamicForm.patchValue(values);
  }
}
