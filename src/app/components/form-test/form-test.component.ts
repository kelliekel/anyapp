import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ANYAPP_FIELD_TYPE } from '@anyapp/components';
import { AnyAppDynamicControl } from '@anyapp/components';
import { DynamicFormService } from '@anyapp/components';



@Component({
  selector: 'aa-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.scss']
})
export class FormTestComponent implements OnInit {
  //form: FormGroup;
  //formData: any;

  testControl: FormControl = new FormControl('123', [
    Validators.required,
    Validators.email,
  ]);

  constructor(private fb: FormBuilder, private dfService: DynamicFormService) {}
  selectedTab: string;
  
  dynamicForm: FormGroup;

  data: AnyAppDynamicControl[] = [
    new AnyAppDynamicControl('controlTest1', 'input', 'initial value 123', false, 'A simple input with an initial value', 'Input1', null),
    new AnyAppDynamicControl('controlTest2', 'input', '', true, 'A required input', 'Input2', null),
    new AnyAppDynamicControl('controlTest3', 'input', 'Something else', true, 'A required input with an initial value', 'Input3', null),
    new AnyAppDynamicControl('controlTest4', 'checkbox', true, false, 'A checkbox', null, 'Checkbox1')
  ];

  ngOnInit() {
     this.dynamicForm = //this.fb.group(
       this.dfService.createForm(this.fb, this.data);
    //);

    // this.dynamicForm = this.fb.group({
    //   controlTest: ['', Validators.required]
    // });

    // this.form = this.fb.group({
    //   inputValue: ['', Validators.required],
    //   form2: this.fb.group({
    //     inputValue2: ['', Validators.required]
    //   })
    // });


    // this.form.controls['inputValue'].valueChanges.subscribe(x => {
            
    // })

    // setTimeout(() => {
    //   this.formData = {
    //     inputValue: '1234'
    //   };
    //   this.form.patchValue(this.formData)
      
    // }, 0);
  }
  
  submit() {
    // console.log(this.form.value); // new data
    // console.log(this.formData); // old data

    // this.formData = Object.assign({}, this.form.value);
    // this.form.patchValue(this.formData)
  }

}

// 2 way binding?
// get data to model?
