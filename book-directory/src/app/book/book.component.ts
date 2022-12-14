import { Component ,Input,Output,EventEmitter} from '@angular/core';
import { BookInterface } from '../types/BookInterface'; 

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
 @Input() book :BookInterface ={} as BookInterface;
@Output() bookEmitter = new EventEmitter<BookInterface>();


 addToCart(){
  this.bookEmitter.emit(this.book);
 }
}
