import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchBooks } from '../state/books';

class BookList extends Component {

  componentDidMount() {
    this.props.fetchBooks();
}

  render() {
      return (
        <div></div>
      );
    }

};

export default connect(state => ({
  books: state.books.data,
  isFetching: state.books.isFetching,
  error: state.books.error,
  }), { fetchBooks })(BookList)