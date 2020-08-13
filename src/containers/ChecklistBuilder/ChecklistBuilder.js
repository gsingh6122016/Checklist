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
        const oldCount = this.state.products[id].count;
        const updatedCount = oldCount + 1;

        const products = {...this.state.products};
        const updatedproducts = products.map(product => {
            return {
                ...product
            }
        });
        updatedproducts[id].count = updatedCount;
        const priceAdddition = updatedproducts[id].price;
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice + priceAdddition;
        this.setState({totalPrice: newPrice, products: updatedproducts})
    }

    render() {

        let controls = this.state.error ? <h1>Something went wrong !!!</h1> : <Spinner />
        
        if(this.state.products){
            controls = (<Controls products={this.state.products} />);
        }

        return (
            <div>
                {controls}
            </div>
        );
    }
}

export default ChecklistBuilder;