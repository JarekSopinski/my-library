import React, { Component } from 'react';
import { Container, Divider } from 'semantic-ui-react';

import AppHeader from './components/AppHeader';
import AddBookForm from './components/AddBookForm';
import BookList from './components/BookList';
import EditBookForm from './components/EditBookForm';

import 'semantic-ui-css/semantic.min.css';
import './style.css';

class App extends Component {

  render() {
    return (
      <Container>
        <AppHeader/>
        <Divider/>
        <AddBookForm/>
        <Divider/>
        <BookList/>
      </Container>
    );
  }
};

export default App;