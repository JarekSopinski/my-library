import React, { Component } from 'react';

class BookListItem extends Component {

  render() {

    const { title, author, isbn, pages, rating } = this.props.book;

    return (
      <li>
        <h2>{title}</h2>
        <h3>{author}</h3>
        <span>ISBN: {isbn}</span>
        <br/>
        { pages && <span>Pages: {pages}</span> }
        <br/>
        { rating && <span>Rating: {rating}</span> }
      </li>
      );

  }

};

export default BookListItem;