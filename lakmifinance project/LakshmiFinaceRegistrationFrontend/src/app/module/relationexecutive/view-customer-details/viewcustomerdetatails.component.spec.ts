import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcustomerdetatailsComponent } from './viewcustomerdetatails.component';

describe('ViewcustomerdetatailsComponent', () => {
  let component: ViewcustomerdetatailsComponent;
  let fixture: ComponentFixture<ViewcustomerdetatailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcustomerdetatailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcustomerdetatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
