import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nested-formgroup-example',
  templateUrl: './nested-formgroup-example.component.html',
  styleUrls: ['./nested-formgroup-example.component.css']
})
export class NestedFormgroupExampleComponent implements OnInit {

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
