import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OeViewcustomerdetatailsComponent } from './oeviewcustomerdetatails.component';

describe('ViewcustomerdetatailsComponent', () => {
  let component: OeViewcustomerdetatailsComponent;
  let fixture: ComponentFixture<OeViewcustomerdetatailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OeViewcustomerdetatailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OeViewcustomerdetatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
