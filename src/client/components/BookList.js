import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchBooks } from '../state/books';
import BookListItem from './BookListItem';

class BookList extends Component {

  componentDidMount() {
    this.props.fetchBooks();
}

  render() {

      return (
        <React.Fragment>
          { this.props.error && <p>{ this.props.error.message }</p> }
          { this.props.isFetching && <p>Fetching data, please wait...</p> }

          { this.props.books && !this.props.isFetching &&
            <ul>
              {
                this.props.books.map(book =>
                  <BookListItem
                  key={book._id}
                  book={book} 
                  />
                )
              }
            </ul>
          }
        </React.Fragment>
      );
    }

};

export default connect(state => ({
  books: state.books.data,
  isFetching: state.books.fetching,
  error: state.books.error,
  }), { fetchBooks })(BookList)