import React, { Component } from 'react';
import Aux from '../../../hoc/auxiliary';
import classes from './OrderSummary.module.css';
import { Link } from 'react-router-dom';

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
                <div>
                <h1>Product Description</h1>
            <h3>An awesome product with the following details:</h3>
            <ul >
                {orderSummary}
            </ul>
            <Link to='/Checklist/products' > <span style={{fontWeight: 'bold'}} >BACK TO PRODUCTS</span></Link>
                </div>
          
        </Aux>
        );
    }
}


export default OrderSummary;