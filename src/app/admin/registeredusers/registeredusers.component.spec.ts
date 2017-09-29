import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredUsersComponent } from './registeredusers.component';

describe('WelcomeComponent', () => {
  let component: RegisteredUsersComponent;
  let fixture: ComponentFixture<RegisteredUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisteredUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
