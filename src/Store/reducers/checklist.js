import * as actionTypes from '../actions/actionsTypes';


const initialState = {
    products: null,
    totalPrice: 0,
    error: false,
    totalCount: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PRODUCTS:
            {
                const oldCount = state.products[action.id-1].count;
                const updatedCount = oldCount + 1;
        
                const products = [...state.products];
               
                const updatedproducts = products.map(product => {
                    return {
                        ...product,
                    }
                });
                updatedproducts[action.id-1].count = updatedCount;
                    return{
                       ...state,
                       products: updatedproducts,
                       totalPrice: state.totalPrice + parseInt(state.products[action.id-1].price),
                       totalCount:state.totalCount + 1
                      
                    }
            }
         


        case actionTypes.REMOVE_PRODUCTS:
            {
                const oldCount = state.products[action.id-1].count;
                const updatedCount = oldCount - 1;
        
                const products = [...state.products];
                
                const updatedproducts = products.map(product => {
                    return {
                        ...product,
                    }
                });
                updatedproducts[action.id-1].count = updatedCount;
                    return{
                        ...state,
                        products: updatedproducts,
                        totalPrice: state.totalPrice - parseInt(state.products[action.id-1].price),
                        totalCount:state.totalCount - 1
                        
                    }
            }
           

        case actionTypes.SET_PRODUCTS:
            const newproducts = (state.products) ? [...state.products]:action.products
           return {
                ...state,
                products: newproducts,
                error: false
            }
        
        case actionTypes.FETCH_PRODUCTS_FAILED:
        return{
            ...state,
            error: true
        };

        default:
            return state;
    }
}


export default reducer;