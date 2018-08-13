import { BadgeDirective } from './badge.directive';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

describe('BadgeDirective', () => {
  let directive: BadgeDirective;
  let fixture: ComponentFixture<BadgeDirective>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgeDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeDirective);
    directive = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(directive).toBeTruthy();
  });
});
