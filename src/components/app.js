import React, { Component } from 'react';
import ListOfBooks from '../containers/book-list';
import BookDetail from '../containers/book-detail';
import Test from '../containers/button';
import Iframe from '../containers/iframe'

export default class App extends Component {
  render() {
    return (
      <div>
          <div>
            <ListOfBooks />
            <BookDetail />
          </div> 
          <div>
            <Test />
            <Iframe />
          </div>
      </div>
    );
  }
}
