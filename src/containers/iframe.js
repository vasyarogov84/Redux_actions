import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createActionsCreator } from 'redux';

 class Iframe extends Component {
    render() {
        console.log(this.props)
        if (!this.props.url) {
            return <p>Nothing to Show</p>
        }
        return (
            <div className="col-sm-6">
                <iframe src={this.props.url}></iframe>
            </div>    
        );
    }
}

function mapStateToProps(state) {
    return {
        url: state.button
    }
}

export default connect(mapStateToProps)(Iframe);