// shop.selector.js
import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    (shop) => shop.products
)

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    (products) => Object.keys(products).map((key) => products[key])
)

export const selectCollectionForEdit = ({id}) => createSelector(
    [selectCollections],
    (products) =>  products.filter((product) => product._id === id)
)

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    (products) => !!products.products
)