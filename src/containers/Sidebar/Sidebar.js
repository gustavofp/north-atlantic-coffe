import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { removeItem } from '../../actions/actions';

class Sidebar extends Component {

    removeItem(id, list) {
        this.props.removeItem(id, list)
    }

    getTotal(list) {
        return list.reduce((a, b) => a + b.price, 0).toFixed(2)
    }

    render() {
        const list = this.props.state.orderList;
        return (
            <div className="sidebar col-md-3 col-sm-12">
                <h2 className="title">Your Order</h2>
                <div className="list">
                    <ul>
                        {list.map((e, i) => <li key={i}><span className="name">{e.title}</span><span className="price">U$ {e.price} || <button onClick={() => this.removeItem(e.id, list)}> X </button> </span></li>)}
                    </ul>
                </div>
                <div className="col-md-10 total">
                    <p>Total: <span className="total-num">U$ { this.getTotal(list) }</span></p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ state: state.reducer })
const mapDispatchToProps = dispatch => bindActionCreators({ removeItem }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);