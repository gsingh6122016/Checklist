import React from 'react';
import Logo from '../../assets/images/product.jpg';
import classes from './ProductLogo.module.css';

const ProductLogo = (props) => {
    return (
        <div className={classes.Logo}>
            <img src={Logo} alt="MyProduct" />
        </div>
    );
};

export default ProductLogo;