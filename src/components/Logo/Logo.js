import React from 'react';
import cartLogo from '../../assets/images/demo.png';
import classes from './Logo.module.css';
const Logo = (props) => {
    return (
        <div className={classes.Logo}>
            <img src={cartLogo} alt="MyCart" />
        </div>
    );
};

export default Logo;