import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOrdersComponent } from './neworders.component';

describe('WelcomeComponent', () => {
  let component: NewOrdersComponent;
  let fixture: ComponentFixture<NewOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
