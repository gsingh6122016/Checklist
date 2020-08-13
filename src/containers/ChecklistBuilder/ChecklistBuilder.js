import React, { Component } from 'react';
import axios from '../../axios-orders';
import Controls from '../../components/Checklist/Controls/Controls';
import Spinner from '../../components/UI/Spinner/Spinner';

class ChecklistBuilder extends Component {

    state = {
        products: null,
        totalPrice: 0,
        spinner: true,
        error: false
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

    render() {

        let controls = this.state.error ? <h1>Something went wrong !!!</h1> : <Spinner />
        
        if(this.state.products){
            controls = (<Controls
                        totalPrice = {this.state.totalPrice}
                         productAdded = {this.addProductHandler}
                         productRemoved = {this.removeProductHandler}
                         products={this.state.products} />);
        }

        return (
            <div>
                <h1>SHOPING LIST</h1>
                {controls}
            </div>
        );
    }
}

export default ChecklistBuilder;