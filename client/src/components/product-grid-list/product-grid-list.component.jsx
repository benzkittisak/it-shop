import React from "react";
import ProductGridListSingle from "../product-grid-list-single/product-grid-list-single.component";

const ProductGridList = ({ product }) => {
    console.log(product);
  return (
    <>
      {product.length > 0 ? (
        product.map((item) => (
          <ProductGridListSingle product={item} key={item._id} />
        ))
      ) : (
        <h2 style={{ textAlign: "center" }}> ไม่พบสินค้าที่คุณต้องการ</h2>
      )}
    </>
  );
};

export default ProductGridList;
