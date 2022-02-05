import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

import {books} from './books.js'
import Book from './Book.js'

function BookList(){
  return (
    <section className='booklist'>
      {books.map(book => {
        //const {image, title, author} = book;
        //return (<Book image={book.image} author={book.author} title={book.title}/>);
        return (<Book key={book.id} {...book}></Book>);
      })}
    </section>
  );
}

// function BookList(){
//   return (
//     <section className='booklist'>
//       {books.map(book => {
//         //const {image, title, author} = book;
//         //return (<Book image={book.image} author={book.author} title={book.title}/>);
//         return (<Book key={book.id} book={book}></Book>);
//       })}
//     </section>
//   );
// }

// const Book = (props) =>
// {
//   const {image, title, author} = props.book;

//   return (
//     <article className='book'>
//       <img src={image} alt=""/>
//       <h2>{title}</h2>
//       <h4>{author}</h4>
//     </article>
//   );
// }

ReactDOM.render(<BookList/>, document.getElementById('root'));