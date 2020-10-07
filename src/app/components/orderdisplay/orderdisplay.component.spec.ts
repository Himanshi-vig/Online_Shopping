import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderdisplayComponent } from './orderdisplay.component';

describe('OrderdisplayComponent', () => {
  let component: OrderdisplayComponent;
  let fixture: ComponentFixture<OrderdisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderdisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
