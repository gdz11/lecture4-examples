import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-builder-example',
  templateUrl: './form-builder-example.component.html',
  styleUrls: ['./form-builder-example.component.css']
})
export class FormBuilderExampleComponent implements OnInit {

  // registrationForm = new FormGroup({
  //   name: new FormControl(''),
  //   email: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl('Tbilisi'),
  //     street: new FormControl('')
  //   })
  // });

  registrationForm = this.fb.group({
    name: [''],
    email: [''],
    address: this.fb.group({
      city: ['Tbilisi'],
      street: ['']
    })
  });

  changeCity(){
    this.registrationForm.patchValue({
      address: {
        city: 'Batumi'
      }
    });
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
