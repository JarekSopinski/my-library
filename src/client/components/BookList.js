import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';

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
            <Grid>
              {
                this.props.books.map(book =>
                  <Grid.Column
                    key={book._id}
                    mobile={16} tablet={8} computer={4} largeScreen={3} widescreen={3}>
                    <BookListItem book={book} />
                  </Grid.Column>
                )
              }
            </Grid>
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