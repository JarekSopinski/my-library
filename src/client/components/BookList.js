import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Message, Icon } from 'semantic-ui-react';

import { getAllBooks } from '../state/books';
import BookListItem from './BookListItem';
import FetchingMessage from './FetchingMessage';

class BookList extends Component {

  componentDidMount() {
    this.props.getAllBooks();
}

  render() {

      return (
        <React.Fragment>
          { this.props.isFetching && <FetchingMessage status="fetching"/>}
          { this.props.error && <FetchingMessage status="error"/>}

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
  }), { getAllBooks })(BookList)