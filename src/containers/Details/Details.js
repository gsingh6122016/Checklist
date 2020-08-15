import React, { Component } from 'react';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import OrderedSummary from '../../components/Checklist/OrderSummary/OrderSummary';

class Details extends Component {


    state = {
        products:null,
        spinner:true,
        errror: false
    }

    componentDidMount () {
        axios.get('product/'+ this.props.match.params.id)
        .then(response => {

            const products = response.data;

            this.setState({products: products});
            this.setState({spinner: false});
            
        })
        .catch(error => {
           console.log(error);
           this.setState({spinner: false});
           this.setState({error: true})
         } );
    }



    render() {
        let orderSummary = this.state.error ? <h1>Something went wrong !!!</h1> : <Spinner />;
        if(this.state.products){
            orderSummary = <OrderedSummary 
            product={this.state.products}

            />;
        }
      

        return (
            <div>
                {orderSummary}
            </div>
        );
    }
}

export default Details;