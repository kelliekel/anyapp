import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicCompileTestComponent } from './dynamic-compile-test.component';

describe('DynamicCompileTestComponent', () => {
  let component: DynamicCompileTestComponent;
  let fixture: ComponentFixture<DynamicCompileTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicCompileTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicCompileTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
