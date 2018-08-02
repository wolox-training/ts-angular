import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../../components/books-service/books.service'

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  book: any;

  constructor(private route: ActivatedRoute, private booksService: BooksService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
       this.getBook((params['id']));
     })
  }

  private getBook(id) {
    this.booksService.getBooks(id)
    .subscribe( res => {
      this.book = res;
    });
  }
}
