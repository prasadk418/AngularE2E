import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriorloginComponent } from './priorlogin.component';

describe('PriorloginComponent', () => {
  let component: PriorloginComponent;
  let fixture: ComponentFixture<PriorloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriorloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriorloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
