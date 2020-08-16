import React, { Component } from 'react';

import Spinner from '../../components/UI/Spinner/Spinner';
import OrderedSummary from '../../components/Checklist/OrderSummary/OrderSummary';
import { connect } from 'react-redux';


class Details extends Component {

    render() {
        
           
        
      

        return (
            <div>
               <OrderedSummary 
            product={this.props.products[this.props.match.params.id-1]}
            />

            </div>
        );
    }
}


const mapStateToProps = state => ({
    products : state.products
    });


export default connect(mapStateToProps)(Details);