import { connect } from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';

import {selectIsCollectionsLoaded} from '../../redux/shop/shop.selector';

import AdminProductList from "./admin-product-list.component";
import withSpinner from '../../components/with-spinner/with-spinner.component';

const mapStateToProps = createStructuredSelector({
    isLoading : (state) => !selectIsCollectionsLoaded(state)
});

const AdminProductListContainer = compose(
    connect(mapStateToProps),
    withSpinner
)(AdminProductList);

export default AdminProductListContainer