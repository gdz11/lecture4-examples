import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormbuilderExampleComponent } from './formbuilder-example.component';

describe('FormbuilderExampleComponent', () => {
  let component: FormbuilderExampleComponent;
  let fixture: ComponentFixture<FormbuilderExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormbuilderExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormbuilderExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
