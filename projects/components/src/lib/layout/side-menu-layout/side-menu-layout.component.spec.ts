import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuLayoutComponent } from './side-menu-layout.component';

describe('SideMenuComponent', () => {
  let component: SideMenuLayoutComponent;
  let fixture: ComponentFixture<SideMenuLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideMenuLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenuLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
