import React, { Component } from 'react';
import axios from '../../axios-orders';
import Controls from '../../components/Checklist/Controls/Controls';
import Spinner from '../../components/UI/Spinner/Spinner';
import Aux from '../../hoc/auxiliary';
import classes from './ChecklistBuilder.module.css';
import { connect } from 'react-redux';
import * as actions from '../../Store/actions/index';

class ChecklistBuilder extends Component {

  

    componentDidMount () {
     
        this.props.oninitProducts();
    }
   
 

    render() {
        

        let controls = this.props.error ? <h1>Something went wrong !!!</h1> : <Spinner />
       

        if(this.props.products){

            const disabledInfo1 = [...this.props.products];
       
            const disabledInfo = disabledInfo1.map(product => {
                return {
                    ...product
                }
            });
          
            for (let key in disabledInfo) {
                disabledInfo[key].count = disabledInfo[key].count <= 0
            }

         

            controls = (<Controls
                        totalPrice = {this.props.totalPrice}
                        totalCount = {this.props.totalCount}
                        disabled = {disabledInfo}
                         productAdded = {this.props.onProductAdded}
                         productRemoved = {this.props.onProductRemoved}
                         products={this.props.products} />);

       

                       

        }

        return (
            <Aux>
                <div className ={classes.ChecklistBuilder} >
                <header>PRODUCTS LIST</header>
                
                {controls}
            </div>
            </Aux>
            
        );
    }
}

const mapStateToProps = state => ({
products : state.products,
error : state.error,
totalCount: state.totalCount,
totalPrice: state.totalPrice
});

const mapDispatchToProps = dispatch => {
    return {
        onProductAdded: (proId) => dispatch(actions.addProduct(proId)),
        onProductRemoved: (proId) => dispatch(actions.removeProduct(proId)),
        oninitProducts: () => dispatch(actions.initProducts()),
        
     }
}


export default connect(mapStateToProps, mapDispatchToProps)(ChecklistBuilder);