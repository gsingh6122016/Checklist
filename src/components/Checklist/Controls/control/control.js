import React from 'react';
import classes from './control.module.css';
const control = (props) => {
    return (
        <div className={classes.Control}>
        <div className={classes.Label}>{props.productname}</div>
        <button className={classes.Less} 
        onClick={props.removed}
        >Less</button>
        <h4>{props.count}</h4>
        <button 
         className={classes.More}
         onClick={props.added}
         >More</button>
    </div>
    );
};

export default control;