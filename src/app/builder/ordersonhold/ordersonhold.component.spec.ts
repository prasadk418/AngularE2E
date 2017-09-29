import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersOnHoldComponent } from './ordersonhold.component';

describe('WelcomeComponent', () => {
  let component: OrdersOnHoldComponent;
  let fixture: ComponentFixture<OrdersOnHoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersOnHoldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersOnHoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
