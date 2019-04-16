import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-books-searched',
  templateUrl: './books-searched.component.html',
  styleUrls: ['./books-searched.component.css']
})
export class BooksSearchedComponent implements OnInit {
  @Input() x;
  constructor() { }

  ngOnInit() {
  }

}
