import React, { Component } from 'react';
import axios from '../../axios-orders';
import Controls from '../../components/Checklist/Controls/Controls';
import Spinner from '../../components/UI/Spinner/Spinner';
import Aux from '../../hoc/auxiliary';
import classes from './ChecklistBuilder.module.css';
import { connect } from 'react-redux';
import * as actions from '../../Store/actions/index';

class ChecklistBuilder extends Component {

    state = {
        // products: null,
        totalPrice: 0,
        spinner: true,
        error: false,
        totalCount: 0
      }

    // componentDidMount () {
    //     axios.get('product')
    //     .then(response => {

    //         const products = response.data;
           
    //         const updatedproducts = products.map(product => {
    //             return {
    //                 ...product,
    //                 count: 0
    //             }
    //         });

    //         this.setState({products: updatedproducts});
    //         this.setState({spinner: false});
            
    //     })
    //     .catch(error => {
    //     //    console.log(error);
    //        this.setState({spinner: false});
    //        this.setState({error: true})
    //      } );
    // }

    componentDidMount () {
        this.props.oninitProducts();
    }
   

    // addProductHandler = (id) => {
    //     const oldCount = this.state.products[id-1].count;
    //     const updatedCount = oldCount + 1;

    //     const products = [...this.state.products];
       
    //     const updatedproducts = products.map(product => {
    //         return {
    //             ...product,
    //         }
    //     });
    //     updatedproducts[id-1].count = updatedCount;
    //     const priceAdddition = parseInt(updatedproducts[id-1].price);
    //         const oldPrice = this.state.totalPrice;
    //         const newPrice = oldPrice + priceAdddition;

    //     const oldTotalCount = this.state.totalCount;
    //     const newTotalCount = oldTotalCount + 1;

    //     this.setState({totalPrice: newPrice, products: updatedproducts, totalCount: newTotalCount})
    // }

    // removeProductHandler = (id) => {
    //     const oldCount = this.state.products[id-1].count;
    //     if (oldCount <= 0) {
    //                 return;
    //             }
    //     const updatedCount = oldCount - 1;

    //     const products = [...this.state.products];
    //     const updatedproducts = products.map(product => {
    //         return {
    //             ...product
    //         }
    //     });
    //     updatedproducts[id-1].count = updatedCount;
    //     const priceAdddition = parseInt(updatedproducts[id-1].price);
    //         const oldPrice = this.state.totalPrice;
    //         const newPrice = oldPrice - priceAdddition;

    //         const oldTotalCount = this.state.totalCount;
    //         const newTotalCount = oldTotalCount - 1;

    //     this.setState({totalPrice: newPrice, products: updatedproducts, totalCount: newTotalCount})
    // }
 
//  productDetailsHandler = (id) => {
//      this.setState({currentIndex: id-1, details: true});
//  }

    // detailCancelHandler = () => {
    //     this.setState({details: false});
    // }

    render() {
        

        let controls = this.state.error ? <h1>Something went wrong !!!</h1> : <Spinner />
       

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
                        totalPrice = {this.state.totalPrice}
                        totalCount = {this.state.totalCount}
                        disabled = {disabledInfo}
                        //  productAdded = {this.addProductHandler}
                        //  productRemoved = {this.removeProductHandler}
                        //  productDetails = {this.productDetailsHandler}
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

const mapStateToProps = state => {
    return {
        products: state.products
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onProductAdded: (proId) => dispatch(actions.addProduct(proId)),
        onProductRemoved: (proId) => dispatch(actions.removeProduct(proId)),
        oninitProducts: () => dispatch(actions.initProducts()),
        
     }
}


export default connect(mapStateToProps, mapDispatchToProps)(ChecklistBuilder);