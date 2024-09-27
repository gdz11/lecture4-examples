import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcontrolExampleComponent } from './formcontrol-example.component';

describe('FormcontrolExampleComponent', () => {
  let component: FormcontrolExampleComponent;
  let fixture: ComponentFixture<FormcontrolExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormcontrolExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormcontrolExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
