import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render() {
        if (!this.props.book) {
           return  <p>Test</p>
        }
        return (
            <div className="col-sm-8">
                {this.props.book.title}
            </div>
            
        );
    }
}

function mapStateToProps(state) {
    return {
        book : state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail);