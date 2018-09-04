import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { fetchList, addItem } from '../../actions/actions';

import Card from '../../components/Card/Card';

class ItemList extends Component {

    componentDidMount() {
        this.props.fetchList();
    }

    addItem(item, list) {
        this.props.addItem(item, list);
    }

    renderCards(list, orderList) {
        if (list.length === 0) return (<div className="col-md-12"><h1 className="centered">Cannot match any itens with this name :(</h1></div>)

        return list.map((e, i) => <Card key={i} title={e.title} price={e.price} img={e.img} addItem={() => this.addItem(e, orderList)} />)
    }

    render() {
        const list = this.props.state.itemList || [];
        const orderList = this.props.state.orderList || [];
        return (
            <div className="row">
                {this.renderCards(list, orderList)}
            </div>
        );
    }
}

const mapStateToProps = state => ({ state: state.reducer })
const mapDispatchToProps = dispatch => bindActionCreators({ fetchList, addItem }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);