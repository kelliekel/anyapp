import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, IterableDiffers, IterableDiffer, DefaultIterableDiffer } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AnyAppControl } from '../../fields/field/field-control';
import { DynamicFormService } from './dynamic-form.service';
import { ComponentsService } from '../../components.service';

@Component({
  selector: 'aa-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit, OnChanges {
  dynamicForm: FormGroup;
  controls: AnyAppControl[] = [];

  @Input() saveButton: boolean = true;
  @Input() resetButton: boolean = true; // settings;

  @Input() formControls: AnyAppControl[];
  @Input() formData: any;
  @Output() onSubmit: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  @Output() onCancel: EventEmitter<any> = new EventEmitter<any>();

  private _differ: IterableDiffer<AnyAppControl>;

  constructor(
    private _fb: FormBuilder,
    private _dfService: DynamicFormService,
    private _iterableDiffers: IterableDiffers,
    private _componentsService: ComponentsService
  ) {
    this._differ = this._iterableDiffers.find([]).create(null); // set up differ
  }

  ngOnInit() {

  }

  ngDoCheck() {
    // only act on real changes (initial form creation still takes place in ngOnInit)
    if (this.dynamicForm) {
      let changes = this._differ && this._differ.diff(this.formControls);
      if (changes) {
        changes.forEachAddedItem(r => {
          this._dfService.addControl(this.dynamicForm, r.item);
          this.controls.push(r.item);
        });
        changes.forEachRemovedItem(r => {
          this.controls.splice(this.controls.findIndex(x => x.name == r.item.name), 1);
          this._dfService.removeControl(this.dynamicForm, r.item);
        });
        this.applyInitialValuesToFormData();
      }
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes) {
      if (changes['formControls'] && changes['formControls'].currentValue) {
        if (changes['formControls'].firstChange) {
          this.initForm();
        }
      }

      if (changes['formData'] && changes['formData'].currentValue) {
        if (changes['formControls'].firstChange == false) {
          this.updateFormValues(this.formData);
        }
      }
    }
  }

  initForm() {
    // can not find a control with... error (2-way-binding is quicker then creating dynamic form)
    //this.controls = this.formControls.map(x => Object.assign({}, x));     
    this.dynamicForm = this._dfService.createForm([]); //this.formControls

    if (!this.formData) {
      this.formData = {};
    }
  }

  applyInitialValuesToFormData() {
    // if formData is not yet set; create it and apply the initial values
    // so that we can 'reset' a form back to its formData state
    // use 'clear' form to really clear it..
    if (this.formData) {
      this.formControls.forEach(x => { 
        this.formData[x.name] = !this.formData[x.name] && x.value ? x.value : this.formData[x.name] 
      });
      this.updateFormValues(this.formData);
    }
  }

  updateFormValues(values: any) {
    this.dynamicForm.patchValue(values);
  }

  clear() {    
    this._componentsService.confirm((result) => { 
      if(result) this.dynamicForm.reset();
    });   
  }

  reset() {
    // reset form means applying the old formData
    this.updateFormValues(this.formData);  
  }

  submit() {
    this.onSubmit.emit(this.dynamicForm);
  }

  cancel() {
    this.onCancel.emit(this.dynamicForm);
  }
}
