import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailersigninComponent } from './retailersignin.component';

describe('RetailersigninComponent', () => {
  let component: RetailersigninComponent;
  let fixture: ComponentFixture<RetailersigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailersigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailersigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
