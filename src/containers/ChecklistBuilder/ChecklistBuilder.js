import React, { Component } from 'react';
import axios from '../../axios-orders';

class ChecklistBuilder extends Component {

    state = {
        products: null,
        totalPrice: null,
        count: null
    }

    componentDidMount () {
        axios.get('product')
        .then(response => {
            this.setState({products: response.data});
        })
        .catch(error => {
           console.log(error);
         } );
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default ChecklistBuilder;