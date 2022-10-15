import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormControlExampleComponent } from './form-control-example/form-control-example.component';
import { FormGroupExampleComponent } from './form-group-example/form-group-example.component';
import { NestedFormgroupExampleComponent } from './nested-formgroup-example/nested-formgroup-example.component';
import { FormBuilderExampleComponent } from './form-builder-example/form-builder-example.component';

@NgModule({
  declarations: [
    AppComponent,
    FormControlExampleComponent,
    FormGroupExampleComponent,
    NestedFormgroupExampleComponent,
    FormBuilderExampleComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
