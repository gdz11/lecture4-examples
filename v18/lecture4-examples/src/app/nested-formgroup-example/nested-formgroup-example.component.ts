import { JsonPipe } from '@angular/common';
import { Component, Pipe } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-nested-formgroup-example',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './nested-formgroup-example.component.html',
  styleUrl: './nested-formgroup-example.component.css'
})
export class NestedFormgroupExampleComponent {

  constructor() { }

  registrationForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormGroup({
      city: new FormControl('Tbilisi'),
      street: new FormControl('')
    })
  });

  changeCity(){
    this.registrationForm.patchValue({
      address: {
        city: 'Batumi'
      }
    });
  }

  ngOnInit(): void {
  }
}
