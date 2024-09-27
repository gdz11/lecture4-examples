import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedFormgroupExampleComponent } from './nested-formgroup-example.component';

describe('NestedFormgroupExampleComponent', () => {
  let component: NestedFormgroupExampleComponent;
  let fixture: ComponentFixture<NestedFormgroupExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NestedFormgroupExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedFormgroupExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
