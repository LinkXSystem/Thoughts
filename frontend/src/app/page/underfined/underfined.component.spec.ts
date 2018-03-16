import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderfinedComponent } from './underfined.component';

describe('UnderfinedComponent', () => {
  let component: UnderfinedComponent;
  let fixture: ComponentFixture<UnderfinedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnderfinedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderfinedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
