import { FormDirective } from './form.directive';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

describe('FormDirective', () => {
  let directive: FormDirective;
  let fixture: ComponentFixture<FormDirective>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDirective);
    directive = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(directive).toBeTruthy();
  });
});
