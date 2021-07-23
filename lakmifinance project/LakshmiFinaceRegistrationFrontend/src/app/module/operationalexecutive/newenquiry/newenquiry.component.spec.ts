import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewenquiryComponent } from './newenquiry.component';

describe('NewenquiryComponent', () => {
  let component: NewenquiryComponent;
  let fixture: ComponentFixture<NewenquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewenquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewenquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
