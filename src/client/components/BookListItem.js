import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Button, Divider } from 'semantic-ui-react';

import { deleteBook } from '../state/books';

class BookListItem extends Component {

  handleDelete = event => {
    const bookId = event.target.dataset.bookId;
    this.props.deleteBook(bookId)
  }

  render() {

    const { _id, title, author, isbn, pages, rating } = this.props.book;

    return (
      <Card centered style={{"minHeight": "350px"}}>
      <Card.Content>

        <Card.Header textAlign="center">
        {author}
        <Divider/>
        {title}
        </Card.Header>

        <Divider/>

        <Card.Meta textAlign="center">
        ISBN: {isbn}
        </Card.Meta>

        <Card.Description>
        { pages && <span>Pages: {pages}</span> }
        <br/>
        { rating && <span>Rating: {rating}</span> }
        </Card.Description>

        <Button
        style={{"marginTop": "20px"}}
        color="blue"
        fluid
        data-book-id={_id}
        >Edit book
        </Button>

        <Button
        style={{"margin": "10px 0 20px 0"}}
        color="red"
        fluid
        data-book-id={_id}
        onClick={ this.handleDelete }
        >Delete book
        </Button>

      </Card.Content>
      </Card>
      );

  }

};

export default connect(null, { deleteBook })(BookListItem)