import React from 'react';
import classes from './Home.module.css';
import Logo from '../Logo/Logo';
import Aux from '../../hoc/auxiliary';

const Home = () => {
    return (
        <Aux>
<div className={classes.Home}>
            <h1>SHOPING CHECKLIST</h1>
            <h2>Click in Products link from navbar to view list of avalable items. </h2>
            <h3>You can select required number, it dispaly he price.</h3>
            <h3>click on any item to show details.</h3>
        </div>
        <Logo />
        </Aux>
        
    );
};

export default Home;