import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksSearchedComponent } from './books-searched.component';

describe('BooksSearchedComponent', () => {
  let component: BooksSearchedComponent;
  let fixture: ComponentFixture<BooksSearchedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksSearchedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksSearchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
