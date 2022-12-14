import { Component, OnInit } from '@angular/core';

import { BookInterface } from '../types/BookInterface';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {


  constructor (private bookService:BooksService){

  }

  bookArr : BookInterface[] =[];

cart :BookInterface[] = [];


ngOnInit(): void {
  this.bookArr = this.bookService.getBooks();
}


addToCart(book:BookInterface){
  // console.log(book);
  this.cart.push(book);
  // console.log(this.cart);
}


}
