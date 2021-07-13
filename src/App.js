

import './App.css';
import { Component } from 'react';

import BookList from './components/BookList';
import BookInput from './components/BookInput';

class App extends Component {

  constructor(props) {
    super(props);

    let booksString = localStorage.getItem('books');
    booksString = booksString ? booksString : '[]';
    const books = JSON.parse(booksString);

    this.state = {
      books: books
    };
  }

  saveBooksState(books) {
    this.setState({ books: books });
    localStorage.setItem('books', JSON.stringify(books));
  }

  onBookAdded(book) {
    this.state.books.push(book);
    this.saveBooksState(this.state.books);
  }

  updateBook(book) {
    const updatedTaskArr = this.state.books.filter(b => b.id === book.id ? book : b);

    this.saveBooksState(updatedTaskArr);
  }

  removeBook(bookId) {
    const updatedTaskArr = this.state.books.filter(book => book.id !== bookId);

    this.saveBooksState(updatedTaskArr);
  }

  render() {
    return (
      <div className="container mt-4 p-4">

        <div className="text-left">
          <h1>Add Book:</h1>
        </div>

        <BookInput
          addBook={(book) => this.onBookAdded(book)}
        />

        <div className="spacer"></div>

        <BookList 
          className="bookList" 
          books={this.state.books}
          updateBook={(book) => this.updateBook(book)} 
          removeBook={(bookId) => this.removeBook(bookId)}
        />
      </div>
    );
  }
}

export default App;