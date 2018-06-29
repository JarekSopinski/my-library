import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Input } from 'semantic-ui-react';

import { validateForm } from '../utilityFunctions';
import { postBook } from '../state/books';

const initialState = {
  title: '',
  author: '',
  isbn: '',
  pages: '',
  rating: ''
};

class AddBookForm extends Component {

  state = initialState;

  handleChange = ({ target: { name, value } }) => {
    this.setState({
        [name]: value
    })
  };

  handleSubmit = event => {
    event.preventDefault();

    const newBookData = this.state;
    if ( validateForm(newBookData) ) {
      this.props.postBook(newBookData);
      alert(`Submited a new book: ${newBookData.title} by ${newBookData.author}`);
      this.setState(initialState)
    }

  };

  render() {

    const { title, author, isbn, pages, rating } = this.state;

        return (
        <React.Fragment>
        <Form onSubmit={this.handleSubmit}>

          <Form.Group widths='equal'>

            <Form.Field required>
              <label>Title</label>
              <Input 
                fluid 
                placeholder="Enter book's title"
                name="title"
                value={title}
                onChange={this.handleChange}
               />
            </Form.Field>

            <Form.Field required>
              <label>Author</label>
              <Input 
                fluid 
                placeholder="Enter book's author"
                name="author"
                value={author}
                onChange={this.handleChange}
               />
            </Form.Field>

          </Form.Group>

          <Form.Group widths='equal'>

            <Form.Field required>
              <label>ISBN</label>
              <Input 
                fluid 
                placeholder='Enter ISBN number' 
                name="isbn"
                value={isbn}
                onChange={this.handleChange}
                />
            </Form.Field>

            <Form.Field>
              <label>Pages</label>
              <Input 
                fluid 
                placeholder='Enter the number of pages' 
                name="pages"
                value={pages}
                onChange={this.handleChange}
                />
            </Form.Field>

            <Form.Field 
              label='How do you rate this book?' 
              control='select'
              name="rating"
              value={rating}
              onChange={this.handleChange}
              >
                <option value="">Can't decide</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </Form.Field>

          </Form.Group>

          <Form.Button>Add a new book</Form.Button>
          
        </Form>
        </React.Fragment>
        );
      }

};

export default connect(null, { postBook })(AddBookForm)