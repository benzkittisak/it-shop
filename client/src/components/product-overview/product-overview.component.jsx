import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";

import ProductGrid from "../product-grid/product-grid.component";

const ProductOverview = ({ products }) => {
  console.log(products);
  return (
    <div className="product-area mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="text-center d-block pb-2">เลือกดูสินค้า</h2>
            <hr className="mb-5 d-block" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <ProductGrid products={products} limit={12} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  products: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(ProductOverview);
