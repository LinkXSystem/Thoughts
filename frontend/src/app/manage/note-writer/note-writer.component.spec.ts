import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteWriterComponent } from './note-writer.component';

describe('NoteWriterComponent', () => {
  let component: NoteWriterComponent;
  let fixture: ComponentFixture<NoteWriterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteWriterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteWriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
