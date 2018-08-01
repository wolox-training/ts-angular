import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../components/books-service/books.service'

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books = [];

  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.getBooks();
  }

  private getBooks() {
    this.booksService.getBooks()
    .subscribe( res => {
      this.books = res;
      console.log(this.books);
    });
  }
}
