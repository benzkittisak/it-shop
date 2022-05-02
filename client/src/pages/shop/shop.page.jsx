import React , { useEffect } from 'react'
import { connect } from 'react-redux';

import { fetchDataStart } from '../../redux/shop/shop.actions';

import ShopAreaContainer from '../../components/shop-area/shop-area.container';
import MasterLayout from '../../layout/master.layout';

const ShopPage = ({fetchStart}) => {
    useEffect(() => {
        fetchStart();
    } , [])
    return(
        <MasterLayout>
            <ShopAreaContainer/>
        </MasterLayout>
    )
}



const mapDispatchToProps = (dispatch) => ({
    fetchStart : () => dispatch(fetchDataStart())
})

export default connect(null,mapDispatchToProps)(ShopPage);