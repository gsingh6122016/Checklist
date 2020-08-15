import React from 'react';
import Control from './control/control';
import classes from './Controls.module.css';

const Controls = (props) => {
    return (
        <div className={classes.Controls}>
            <div className={classes.Price} >
                <p>To Pay: <strong> INR {props.totalPrice}</strong> </p> 
                 <p>You have Selected <strong>{props.totalCount} items.</strong>  </p>
            </div>
            {
                props.products.map(product => (
                    <Control 
                     key={product.id}
                     productid={product.id}
                     productname={product.name}
                     details ={() => props.productDetails(product.id)}
                     added={() => props.productAdded(product.id)}
                     removed={() => props.productRemoved(product.id)}
                     disabled ={props.disabled[product.id-1].count}
                     count = {product.count} />
                ))
            }
            
            
        </div>
    );
};

export default Controls;