// shop.reducer
import ShopActionTypes from './shop.types';

// import PRODUCT_DATA from '../../data/product.data';

const INITIAL_STATE = {
    products:null,
    isFetching: false,
    error:null
}

const shopReducer = (state = INITIAL_STATE  , action) => {
    switch(action.type) {
        case ShopActionTypes.FETCH_DATA_START:
            return{
                ...state,
                isFetching:true
            }
        case ShopActionTypes.FETCH_DATA_SUCCESS:
            return{
                ...state,
                products:action.payload,
                isFetching:false
            }
        case ShopActionTypes.FETCH_DATA_FAILURE:
            return {
                ...state,
                error:action.payload,
                isFetching:false
            }
        default:
            return state;
    }
}

export default shopReducer;