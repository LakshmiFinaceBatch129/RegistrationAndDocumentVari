import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowenquiryComponent } from './showenquiry.component';

describe('ShowenquiryComponent', () => {
  let component: ShowenquiryComponent;
  let fixture: ComponentFixture<ShowenquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowenquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowenquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
