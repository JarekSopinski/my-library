import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Header, Form, Input, Divider } from 'semantic-ui-react';

import { validateForm } from '../utilityFunctions';
import { editBook } from '../state/books';

const initialState = {
  id: '',
  title: '',
  author: '',
  isbn: '',
  pages: '',
  rating: ''
};

class EditBookForm extends Component {

  state = initialState;

  componentDidMount(){
    this.setState({
      id: this.props.editedBook._id,
      title: this.props.editedBook.title,
      author: this.props.editedBook.author,
      isbn: this.props.editedBook.isbn,
      pages: this.props.editedBook.pages || "",
      rating: this.props.editedBook.rating || ""
    })
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
        [name]: value
    })
  };

  handleSubmit = event => {
    event.preventDefault();

    const newBookData = this.state;
    console.log(newBookData);
    if ( validateForm(newBookData) ) {
      //this.props.postBook(newBookData);
      alert(`Submited a new book: ${newBookData.title} by ${newBookData.author}`);
      this.setState(initialState)
    }

  };

    render() {

      const { title, author, isbn, pages, rating } = this.state;

      return (
        <Modal.Content>

          <Modal.Description>
          <Header>Edit Book</Header>
          </Modal.Description>

          <Divider/>

          <Form onSubmit={this.handleSubmit}>

            <Form.Group widths='equal'>

              <Form.Field required>
                <label>Edit title</label>
                <Input 
                  fluid 
                  name="title"
                  value={title}
                  onChange={this.handleChange}
                />
              </Form.Field>

              <Form.Field required>
                <label>Edit author</label>
                <Input 
                  fluid
                  name="author"
                  value={author}
                  onChange={this.handleChange}
                />
              </Form.Field>

            </Form.Group>

            <Form.Group widths='equal'>

              <Form.Field required>
                <label>Edit ISBN</label>
                <Input 
                  fluid 
                  name="isbn"
                  value={isbn}
                  onChange={this.handleChange}
                  />
              </Form.Field>

              <Form.Field>
                <label>Edit Pages</label>
                <Input 
                  fluid
                  name="pages"
                  value={pages}
                  onChange={this.handleChange}
                  />
              </Form.Field>

              <Form.Field 
                label='Edit rating' 
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

            <Form.Button>Submit new data</Form.Button>

            </Form>

        </Modal.Content>
        );
      }

};

export default connect(state => null, { editBook })(EditBookForm)