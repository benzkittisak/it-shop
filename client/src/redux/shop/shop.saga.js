import {takeLatest , all , call , put } from 'redux-saga/effects';
import axios from 'axios';

import ShopActionTypes from './shop.types';

import {
    fetchDataSuccess,
    fetchDataFailure
} from './shop.actions'

export function* fetchStart(){
    try{
        var data ;
        yield axios.get("http://localhost:4000/api/product")
        .then(res => data = res.data);
        yield put(fetchDataSuccess(data))
    }catch(e){
        yield put(fetchDataFailure(e))
    }
}

export function* onFetchDataStart(){
    yield takeLatest(ShopActionTypes.FETCH_DATA_START , fetchStart)
}

export function* shopSaga(){
    yield all([
        call(onFetchDataStart)
    ])
}