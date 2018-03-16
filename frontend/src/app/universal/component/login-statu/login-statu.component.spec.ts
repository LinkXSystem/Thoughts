import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginStatuComponent } from './login-statu.component';

describe('LoginStatuComponent', () => {
  let component: LoginStatuComponent;
  let fixture: ComponentFixture<LoginStatuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginStatuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginStatuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
