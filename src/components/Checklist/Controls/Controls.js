import React from 'react';
import Control from './control/control';
import classes from './Controls.module.css';

const Controls = (props) => {
    return (
        <div className={classes.Controls}>
            <p>Current Price: <strong>1000</strong></p>
            {
                props.products.map(product => (
                    <Control key={product.id}
                     productname={product.name}
                     
                     count = {product.count} />
                ))
            }
            
            
        </div>
    );
};

export default Controls;