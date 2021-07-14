

import React, { Component } from 'react'
import {Button, Modal} from 'react-bootstrap'
import './BookList.css';
import Book from '../models/Book';

export default class BookList extends Component {

  constructor(){
    super()
    this.state = {
      show: false,
      editId: 0,
      editTitle: '',
      editAuthor: '',
      editISBN: ''
    }
  }

  showModal(bookid, booktitle, bookauthor, bookisbn){
    this.setState({
      show:true,
      editId: bookid,
      editTitle: booktitle,
      editAuthor: bookauthor,
      editISBN: bookisbn
    })
  }

  onTitleChanged(e) {
    this.setState({ editTitle: e.target.value })
  }

  onAuthorChanged(e) {
    this.setState({ editAuthor: e.target.value })
  }

  onISBNChanged(e) {
    this.setState({ editISBN: e.target.value })
  }

  saveModal(){
    this.setState({show:false})
    let book = new Book(this.state.editTitle, this.state.editAuthor, this.state.editISBN);
    book.id = this.state.editId;
    this.props.updateBook(book);
  }

  cancelModal(){
    this.setState({show:false})
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th className = "col-4">Title</th>
              <th className = "col-4">Author</th>
              <th className = "col-4">ISBN</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.books.map(book => {
                return <tr key={book.id}>
                  <td>
                    <div className="pointer" 
                    onClick={()=>this.showModal(book.id, book.title, book.author, book.isbn)}
                    >
                      {book.title}
                    </div>
                  </td>
                  <td>
                    <div className="pointer" 
                    onClick={()=>this.showModal(book.id, book.title, book.author, book.isbn)}
                    >
                      {book.author}
                    </div>
                  </td>
                  <td>
                    <div className="pointer" 
                    onClick={()=>this.showModal(book.id, book.title, book.author, book.isbn)}
                    >
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

        <Modal show={this.state.show} >
        <Modal.Header>Edit book information below:</Modal.Header>
        <Modal.Body>

          <div className="input-group mb-3">
            <span class="input-group-text">Title</span>
            <input
              value={this.state.editTitle}
              onChange={(e) => this.onTitleChanged(e)}
              type="text"
              className="form-control"/>
          </div>

          <div className="input-group mb-3">
            <span class="input-group-text">Author</span>
            <input
              value={this.state.editAuthor}
              onChange={(e) => this.onAuthorChanged(e)}
              type="text"
              className="form-control"/>
          </div>

          <div className="input-group mb-3">
            <span class="input-group-text">ISBN</span>
            <input
              value={this.state.editISBN}
              onChange={(e) => this.onISBNChanged(e)}
              type="text"
              className="form-control"/>
          </div>
          
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-secondary" onClick={()=>this.cancelModal()}>
            Cancel
          </Button>
          <Button className="btn-primary" onClick={()=>this.saveModal()}>
            Save Changes
          </Button>
        </Modal.Footer>
        </Modal>
        
      </div>
    )
  }
}