import * as actionTypes from '../actions/actionsTypes';


const initialState = {
    products: null
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
                       products:{ updatedproducts}
                      
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
                        products:{ updatedproducts}
                        
                    }
            }
           

        case actionTypes.SET_PRODUCTS:
           return {
                ...state,
                products: action.products
            }
    }
}


export default reducer;