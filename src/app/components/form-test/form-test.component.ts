import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ANYAPP_FIELD_TYPE } from '@anyapp/components';
import { AnyAppControl } from '@anyapp/components';
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

  data: AnyAppControl[] = [
    new AnyAppControl('controlTest1', 'initial value 123', 'input'),
    new AnyAppControl('controlTest2', '', 'input'),
    new AnyAppControl('controlTest3', 'Something else', 'input'),
    new AnyAppControl('controlTest4', true, 'checkbox')
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
