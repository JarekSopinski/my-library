import React, { Component } from 'react';

import Header from './components/Header';
import AddBookForm from './components/AddBookForm';
import BookList from './components/BookList';
import EditBookForm from './components/EditBookForm';

import './style.css';

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Header/>
        <AddBookForm/>
        <BookList/>
        <EditBookForm/>
      </React.Fragment>
    );
  }
};

export default App;