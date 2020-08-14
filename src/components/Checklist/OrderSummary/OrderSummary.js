import React, { Component } from 'react';
import Aux from '../../../hoc/auxiliary';
import classes from './OrderSummary.module.css';

class OrderSummary extends Component {

    componentDidUpdate () {
        console.log("ordered summary will update");
    }

    render () {

        const orderSummary = Object.keys(this.props.product)
        .map(proKey => {
            if(proKey !== 'id' && proKey !== 'count' && proKey !== 'createdAt'){
                return <li key={proKey}>
                 <span style={{textTransform: 'capitalize'}}>{proKey}</span>: {this.props.product[proKey]}
               </li>
            }
        
        });

        return (
            <Aux>
            <h3>Product Description</h3>
            <p>An awesome product with the following details:</p>
            <ul >
                {orderSummary}
            </ul>
           
        </Aux>
        );
    }
}


export default OrderSummary;