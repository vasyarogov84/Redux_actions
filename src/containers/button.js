import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import showSite from '../actions/button-action';


 class Test extends Component {
    render() {
        return (
            <div className="col-sm-6">
                <button
                   onClick={() => {this.props.showSite()}}
                >Click Me</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
     return bindActionCreators({showSite: showSite}, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Test)



