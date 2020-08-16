import * as actionTypes from './actionsTypes';
import axios from '../../axios-orders';


export const addProduct = (proId) => {
    return {
        type: actionTypes.ADD_PRODUCTS,
        id: proId
    };
};

export const removeProduct = (proId) => {
    return {
        type: actionTypes.REMOVE_PRODUCTS,
        id: proId
    };
};

export const setProducts = (products) => {
    return {
        type: actionTypes.SET_PRODUCTS,
        products: products
    }
}

export const initProducts = () => {
    return dispatch => {
        axios.get('product')
        .then(response => {
            const products = response.data;
   
    const updatedproducts = products.map(product => {
        return {
            ...product,
            count: 0
        }
    });
            dispatch(setProducts(updatedproducts));
        })
        .catch(error => {
      console.log(error);
         } );
};
};

