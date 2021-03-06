// root.reducer.js
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import shopReducer from './shop/shop.reducer';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

const persistOptions = {
    key:'root',
    storage,
    whitelist:['user' , 'cart']
}

const rootReducer = combineReducers({
    shop:shopReducer,
    user:userReducer,
    cart:cartReducer
});


export default persistReducer(persistOptions , rootReducer);