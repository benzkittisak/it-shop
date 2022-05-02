import React, { useState , useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";

import {getSortProduct} from '../../assets/utils/product.utils';

import ShopProduct from "../shop-product/shop-product.component";
import ShopSideBar from "../shop-sidebar/shop-sidebar.component";


const ShopArea = ({ products }) => {
  const [sortValue, setSortValue] = useState("");
  const [currentProductsData , setCurrentProductsData] = useState(products);

  const getSortParams = (sortType , sortValue) => {
    setSortValue(sortValue);
  };

  useEffect(() => {
      let sortedProduct = getSortProduct(products , sortValue)
      setCurrentProductsData(sortedProduct)
  } , [sortValue , products])

  return (
    <div className="shop-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <ShopSideBar product={products} getSortParams={getSortParams} />
          </div>
          <div className="col-lg-9">
              <ShopProduct products={currentProductsData} />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  products: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(ShopArea);
