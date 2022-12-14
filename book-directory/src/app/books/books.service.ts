import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getBooks(){

    return [
      {
      title: "Clean Code: A Handbook of Agile Software Craftsmanship",
      imageURL: "https://i.ebayimg.com/images/g/3w4AAOSwD1Jjb01-/s-l500.jpg",
      amount:34.99,
      author:"Robert C. Martin"
    },
    {
      title: "Clean Architecture",
      imageURL: "https://i.ebayimg.com/images/g/X6EAAOSwdodjjxM7/s-l500.jpg",
      amount:29.99,
      author:"Robert C. Martin"
    },
    {
      title: "The Clean Coder : A Code of Conduct for Professional...",
      imageURL: "https://i.ebayimg.com/images/g/xO4AAOSwqh5h-WsZ/s-l500.jpg",
      amount:25.00,
      author:"Robert C. Martin"
    },
    {
      title: "NEW Agile Software Development Principles Patterns Practices 1E",
      imageURL: "https://i.ebayimg.com/images/g/lksAAOSwn1JeAuy-/s-l500.jpg",
      amount:69.90,
      author:"Robert C. Martin"
    },
    {
      title: "Clean Agile. The Essence of Agile Software Development",
      imageURL: "https://i.ebayimg.com/images/g/bWcAAOSwQ1FjjxM-/s-l500.jpg",
      amount:24.99,
      author:"Robert C. Martin"
    },
    {
      title: "Agile Estimating and Planning",
      imageURL: "https://i.ebayimg.com/images/g/FccAAOSwfr9jkqvp/s-l500.jpg",
      amount:19.75,
      author:"(Robert C. Martin) By Mike Cohn"
    },
    
  
  ] 
  }
}
