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
                 <span style={{textTransform: 'capitalize',fontSize: 'large'}}>{proKey}</span>: <span style={{textTransform: 'capitalize',fontSize: 'large',fontWeight: 'bold'}}>{this.props.product[proKey]}</span>
               </li>
            }
        
        });

        return (
            <Aux>
            <h1>Product Description</h1>
            <h3>An awesome product with the following details:</h3>
            <ul >
                {orderSummary}
            </ul>
           
        </Aux>
        );
    }
}


export default OrderSummary;