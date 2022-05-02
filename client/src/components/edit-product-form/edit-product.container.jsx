import { connect } from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';

import {selectIsCollectionsLoaded} from '../../redux/shop/shop.selector';

import EditProductForm from "./edit-product-form.componnent";
import withSpinner from '../../components/with-spinner/with-spinner.component';

const mapStateToProps = createStructuredSelector({
    isLoading : (state) => !selectIsCollectionsLoaded(state)
});

const EditProductContainer = compose(
    connect(mapStateToProps),
    withSpinner
)(EditProductForm);

export default EditProductContainer