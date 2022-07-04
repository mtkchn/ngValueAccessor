import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumericAttributeInputComponent } from './numeric-attribute-input.component';

describe('NumericAttributeInputComponent', () => {
  let component: NumericAttributeInputComponent;
  let fixture: ComponentFixture<NumericAttributeInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumericAttributeInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumericAttributeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
