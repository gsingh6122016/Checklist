import React from 'react';
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'
const NavigationItems = () => {
    return (
        <ul className={classes.NavigationItems}>
           <NavigationItem link="/Checklist" exact>Home</NavigationItem>
           <NavigationItem link="/Checklist/products">Products</NavigationItem>
        </ul>
    );
};

export default NavigationItems;