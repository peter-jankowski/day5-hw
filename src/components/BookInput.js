

import React, { Component } from 'react'
import Book from '../models/Book';

export default class BookInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      author: '',
      isbn: ''
    };
  }

  onAddBook() {
    const book = new Book(this.state.title, this.state.author, this.state.isbn);
    this.props.addBook(book);
    this.setState({ title: '', author: '', isbn: ''})
  }

  onTitleChanged(e) {
    this.setState({ title: e.target.value })
  }

  onAuthorChanged(e) {
    this.setState({ author: e.target.value })
  }

  onISBNChanged(e) {
    this.setState({ isbn: e.target.value })
  }

  render() {
    return (
      <div className="mt-3">
        <h6>Title</h6>
        <div className="input-group mb-3">
          <input
            value={this.state.name}
            onChange={(e) => this.onTitleChanged(e)}
            type="text"
            className="form-control"/>
        </div>

        <h6>Author</h6>
        <div className="input-group mb-3">
          <input
            value={this.state.author}
            onChange={(e) => this.onAuthorChanged(e)}
            type="text"
            className="form-control"/>
        </div>

        <h6>ISBN#</h6>
        <div className="input-group mb-3">
          <input
            value={this.state.isbn}
            onChange={(e) => this.onISBNChanged(e)}
            type="text"
            className="form-control"/>
        </div>

        <div className="d-grid gap-2">
          <button onClick={() => this.onAddBook()}
            className="btn btn-outline-secondary"
            type="button" >SUBMIT</button>
        </div>
      </div>
    )
  }
}