import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetpwdComponent } from './setpwd.component';

describe('SetpwdComponent', () => {
  let component: SetpwdComponent;
  let fixture: ComponentFixture<SetpwdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetpwdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetpwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
