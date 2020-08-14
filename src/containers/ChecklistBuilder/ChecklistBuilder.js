import React, { Component } from 'react';
import axios from '../../axios-orders';
import Controls from '../../components/Checklist/Controls/Controls';
import Spinner from '../../components/UI/Spinner/Spinner';
import Modal from '../../components/UI/Modal/Modal';
import OrderedSummary from '../../components/Checklist/OrderSummary/OrderSummary';

class ChecklistBuilder extends Component {

    state = {
        products: null,
        totalPrice: 0,
        spinner: true,
        error: false,
        details: false,
        currentIndex: 0,
      }

    componentDidMount () {
        axios.get('product')
        .then(response => {

            const products = response.data;
           
            const updatedproducts = products.map(product => {
                return {
                    ...product,
                    count: 0
                }
            });

            this.setState({products: updatedproducts});
            this.setState({spinner: false});
            
        })
        .catch(error => {
        //    console.log(error);
           this.setState({spinner: false});
           this.setState({error: true})
         } );
    }
   

    addProductHandler = (id) => {
        const oldCount = this.state.products[id-1].count;
        const updatedCount = oldCount + 1;

        const products = [...this.state.products];
       
        const updatedproducts = products.map(product => {
            return {
                ...product,
            }
        });
        updatedproducts[id-1].count = updatedCount;
        const priceAdddition = parseInt(updatedproducts[id-1].price);
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice + priceAdddition;
        this.setState({totalPrice: newPrice, products: updatedproducts})
    }

    removeProductHandler = (id) => {
        const oldCount = this.state.products[id-1].count;
        if (oldCount <= 0) {
                    return;
                }
        const updatedCount = oldCount - 1;

        const products = [...this.state.products];
        const updatedproducts = products.map(product => {
            return {
                ...product
            }
        });
        updatedproducts[id-1].count = updatedCount;
        const priceAdddition = parseInt(updatedproducts[id-1].price);
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice - priceAdddition;
        this.setState({totalPrice: newPrice, products: updatedproducts})
    }
 
 productDetailsHandler = (id) => {
     this.setState({currentIndex: id-1, details: true});
 }

    detailCancelHandler = () => {
        this.setState({details: false});
    }

    render() {
        

        let controls = this.state.error ? <h1>Something went wrong !!!</h1> : <Spinner />
        let orderSummary = null;

        if(this.state.products){

            const disabledInfo1 = [...this.state.products];
       
            const disabledInfo = disabledInfo1.map(product => {
                return {
                    ...product
                }
            });
          
            for (let key in disabledInfo) {
                disabledInfo[key].count = disabledInfo[key].count <= 0
            }

         console.log(disabledInfo);

            controls = (<Controls
                        totalPrice = {this.state.totalPrice}
                        disabled = {disabledInfo}
                         productAdded = {this.addProductHandler}
                         productRemoved = {this.removeProductHandler}
                         productDetails = {this.productDetailsHandler}
                         products={this.state.products} />);

        orderSummary = <OrderedSummary 
                         product={this.state.products[this.state.currentIndex]}
            
                         />;

                       

        }

        return (
            <div>
                <Modal show={this.state.details} modalClosed={this.detailCancelHandler}>
                   {orderSummary}
                </Modal>
                <h1>SHOPING LIST</h1>
                {controls}
            </div>
        );
    }
}

export default ChecklistBuilder;