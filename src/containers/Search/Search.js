import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { searchItem } from '../../actions/actions';

class Search extends Component {
    state = {  }
    searchItem(e) {
        this.props.searchItem(e.target.value, this.props.state.originalList);
    }

    render() { 
        return ( 
            <div className="search-wrapper col-sm-12 col-md-6 col-lg-6">
                <input type="text" className="search-input" onKeyUp={(e) => this.searchItem(e)} placeholder="Search" />
            </div>
         );
    }
}

const mapStateToProps = state => ({ state: state.reducer })
const mapDispatchToProps = dispatch => bindActionCreators({ searchItem }, dispatch);
 
export default connect(mapStateToProps, mapDispatchToProps)(Search);