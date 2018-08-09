import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuGroupComponent } from './side-menu-group.component';

describe('SideMenuItemComponent', () => {
  let component: SideMenuGroupComponent;
  let fixture: ComponentFixture<SideMenuGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideMenuGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenuGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
