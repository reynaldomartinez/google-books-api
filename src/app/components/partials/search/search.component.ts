import { Component, OnInit } from '@angular/core';
import {GoogleBooksService} from '../../../services/google-books.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  userInput = '';
  booksArray: Array <any> = [];
  objectData;
  constructor(private BooksService: GoogleBooksService) { }

  ngOnInit() {
  }
  searchBook(userInput) {
    this.BooksService.getBooks(userInput).subscribe(data => {
      this.booksArray = data.items;
    // console.log(data.items);
      if (this.booksArray.length > 1) {
        this.booksArray.shift();
      }
      console.log(this.booksArray);

    }, error => {
      console.log(error);
      alert('Please enter a new Book Title');
    });
  }
}
