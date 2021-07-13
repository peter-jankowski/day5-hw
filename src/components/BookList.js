

import React, { Component } from 'react'
import './BookList.css';

export default class BookList extends Component {
  render() {

    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>ISBN</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.books.map(book => {
                return <tr key={book.id}>
                  <td>
                    <div className="pointer">
                      {book.title}
                    </div>
                  </td>
                  <td>
                    <div className="pointer">
                      {book.author}
                    </div>
                  </td>
                  <td>
                    <div className="pointer">
                      {book.isbn}
                    </div>
                  </td>
                  <td>
                    <div className="trash"
                    onClick={() => this.props.removeBook(book.id)}>
                      <u>X</u>
                    </div>
                  </td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}