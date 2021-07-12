

import './App.css';
import { Component } from 'react';

import BookList from './components/BookList';
import BookInput from './components/BookInput';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      books: []
    };
  }

  onBookAdded(book) {
    this.state.books.push(book);
    this.setState({
      books: this.state.books
    });
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

        <BookList className="bookList" books={this.state.books} />

      </div>
    );
  }
}

export default App;