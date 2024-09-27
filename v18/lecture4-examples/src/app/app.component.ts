import { Component } from '@angular/core';
import { FormcontrolExampleComponent } from './formcontrol-example/formcontrol-example.component';
import { FormgroupExampleComponent } from './formgroup-example/formgroup-example.component';
import { NestedFormgroupExampleComponent } from './nested-formgroup-example/nested-formgroup-example.component';
import { FormbuilderExampleComponent } from './formbuilder-example/formbuilder-example.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormcontrolExampleComponent, FormgroupExampleComponent, NestedFormgroupExampleComponent, FormbuilderExampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lecture4-examples';
}
