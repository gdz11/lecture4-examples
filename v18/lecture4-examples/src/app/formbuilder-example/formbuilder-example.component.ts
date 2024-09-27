import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formbuilder-example',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './formbuilder-example.component.html',
  styleUrl: './formbuilder-example.component.css'
})
export class FormbuilderExampleComponent {

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

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }
}
