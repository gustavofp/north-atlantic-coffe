import React from 'react';

const Card = (props) => {

    return (
        <div className="col-md-4 col-sm-12 card-row">
            <div className="card">
                <img src={props.img} />
                <div className="row card-body">
                    <div className="col-md-12">
                        <h2>{props.title}</h2>
                    </div>
                    <div className="col-md-4">
                        <p className="price">U$ {props.price}</p>
                    </div>
                    <div className="col-md-8">
                        <button onClick={props.addItem} className="order">Add to my order</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;