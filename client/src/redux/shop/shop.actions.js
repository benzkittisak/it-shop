// shop.actions.js
import ShopActionTypes from './shop.types';

export const fetchDataStart = () => ({
    type:ShopActionTypes.FETCH_DATA_START
})

export const fetchDataSuccess = product => ({
    type:ShopActionTypes.FETCH_DATA_SUCCESS,
    payload:product
})

export const fetchDataFailure = error => ({
    type:ShopActionTypes.FETCH_DATA_FAILURE,
    payload:error
})