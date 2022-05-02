import { compose } from "redux";
import { connect } from "react-redux";
import {createStructuredSelector} from 'reselect';

import {selectIsCollectionsLoaded} from '../../redux/shop/shop.selector'

import ShopArea from "./shop-area.component";
import withSpinner from '../../components/with-spinner/with-spinner.component';

const mapStateToProps = createStructuredSelector({
    isLoading : (state) => !selectIsCollectionsLoaded(state),

})

const ShopAreaContainer = compose(
    connect(mapStateToProps),
    withSpinner
)(ShopArea);

export default ShopAreaContainer;
