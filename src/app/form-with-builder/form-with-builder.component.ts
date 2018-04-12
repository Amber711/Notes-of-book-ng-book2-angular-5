import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-with-builder',
  templateUrl: './form-with-builder.component.html',
  styleUrls: ['./form-with-builder.component.css']
})
export class FormWithBuilderComponent implements OnInit {
  myForm: FormGroup;
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['ABC123']
    })

  }

  ngOnInit() {
  }

  onSubmit(form: any): void {
    console.log('form builder:', form);
  }

}
