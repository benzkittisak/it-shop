import React from 'react'
import ShopSidebarCategory from '../shop-sidebar-category/shop-sidebar-category.component';

import {getIndividualCategories} from '../../assets/utils/product.utils';

const ShopSideBar = ({product , getSortParams}) => {

    const categories = getIndividualCategories(product)

    return(
        <div className="sidebar-style">
            <ShopSidebarCategory categories={categories} getSortParams={getSortParams}/>
        </div>
    )
}

export default ShopSideBar;