import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import selectedBook from '../actions/index';

class ListOfBooks extends Component {
    renderList() {
        return  this.props.books.map((book) => {
            return <li className="list-group-item" 
                       key={book.title}
                       onClick={() => {
                           this.props.selectedBook(book);
                       }}
            >{book.title}</li>
        });
    }
    
    render() {
        return (
             <ul className="group-list col-sm-4">
                  {this.renderList()}
             </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        books: state.books
    }
}

function mapDispatchToProps(dispatch) {
   return bindActionCreators({selectedBook: selectedBook}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(ListOfBooks);

