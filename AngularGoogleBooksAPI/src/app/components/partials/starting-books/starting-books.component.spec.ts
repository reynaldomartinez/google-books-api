import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartingBooksComponent } from './starting-books.component';

describe('StartingBooksComponent', () => {
  let component: StartingBooksComponent;
  let fixture: ComponentFixture<StartingBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartingBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartingBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
