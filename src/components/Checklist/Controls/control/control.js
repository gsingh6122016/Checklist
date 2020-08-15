import React from 'react';
import classes from './control.module.css';
import { Link } from 'react-router-dom';
import ProductLogo from '../../../Logo/ProductLogo';
import Aux from '../../../../hoc/auxiliary';

const control = (props) => {
    return (
        <Aux>
           
        <div className={classes.Control}>
        <div className={classes.logo}> <ProductLogo /></div>   
        <div className={classes.Label} >
        <Link to= {'products/' + props.productid} >
            {props.productname}
        </Link>
        </div>
        <div className={classes.counter}>
        <button className={classes.Less} 
        onClick={props.removed}
        disabled={props.disabled}
        >-</button>
        <h4>{props.count}</h4>
        <button 
         className={classes.More}
         onClick={props.added}
         >+</button>
        </div>
       
    </div>
        </Aux>
        
    );
};

export default control;