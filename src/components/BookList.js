

import React, { Component } from 'react'

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
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.isbn}</td>
                  <td></td>
                </tr>
              })
            }
          </tbody>
        </table>

      </div>
    )
  }
}