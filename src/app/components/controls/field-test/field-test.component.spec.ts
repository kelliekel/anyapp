import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldTestComponent } from './field-test.component';

describe('FieldTestComponent', () => {
  let component: FieldTestComponent;
  let fixture: ComponentFixture<FieldTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
