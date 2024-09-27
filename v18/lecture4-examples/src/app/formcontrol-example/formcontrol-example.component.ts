import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formcontrol-example',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formcontrol-example.component.html',
  styleUrl: './formcontrol-example.component.css'
})
export class FormcontrolExampleComponent {
  constructor() { }

  name = new FormControl('')

  changeValue(){
    this.name.setValue('Hello World');
  }

  ngOnInit(): void {
  }
}
