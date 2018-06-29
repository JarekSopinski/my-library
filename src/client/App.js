import React, { Component } from 'react';
import { Container, Divider } from 'semantic-ui-react';

import Header from './components/Header';
import AddBookForm from './components/AddBookForm';
import BookList from './components/BookList';
import EditBookForm from './components/EditBookForm';

import './style.css';

class App extends Component {

  render() {
    return (
      <Container>
        <Header/>
        <Divider/>
        <AddBookForm/>
        <Divider/>
        <BookList/>
        <EditBookForm/>
      </Container>
    );
  }
};

export default App;