import { compose } from "redux";
import { connect } from "react-redux";
import {createStructuredSelector} from 'reselect';

import {selectIsCollectionsLoaded} from '../../redux/shop/shop.selector'

import ProductOverview from './product-overview.component';
import withSpinner from '../../components/with-spinner/with-spinner.component';

const mapStateToProps = createStructuredSelector({
    isLoading : (state) => !selectIsCollectionsLoaded(state),

})

const ProductOverviewContainer = compose(
    connect(mapStateToProps),
    withSpinner
)(ProductOverview);

export default ProductOverviewContainer;
