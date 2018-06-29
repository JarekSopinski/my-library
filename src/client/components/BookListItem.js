import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteBook } from '../state/books';

class BookListItem extends Component {

  handleDelete = event => {
    const bookId = event.target.dataset.bookId;
    this.props.deleteBook(bookId)
  }

  render() {

    const { _id, title, author, isbn, pages, rating } = this.props.book;

    return (
      <li>
        <h2>{title}</h2>
        <h3>{author}</h3>
        <span>ISBN: {isbn}</span>
        <br/>
        { pages && <span>Pages: {pages}</span> }
        <br/>
        { rating && <span>Rating: {rating}</span> }
        <br/>
        <button
        data-book-id={_id}
        onClick={ this.handleDelete }
        >Delete book</button>
      </li>
      );

  }

};

export default connect(null, { deleteBook })(BookListItem)