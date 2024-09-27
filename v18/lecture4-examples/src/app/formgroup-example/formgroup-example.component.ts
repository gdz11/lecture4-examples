import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formgroup-example',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './formgroup-example.component.html',
  styleUrl: './formgroup-example.component.css'
})
export class FormgroupExampleComponent {
  registrationForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('')
  });

  constructor() { }

  changeData(){
    this.registrationForm.setValue({
      name: 'test',
      email: 'test@example.com'
    });
  }

  changeName(){
    this.registrationForm.patchValue({
      name: 'test2'
    });
  }

  ngOnInit(): void {
  }
}
