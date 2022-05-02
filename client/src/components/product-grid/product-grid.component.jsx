import React from "react";
import ProductGridSingle from "../product-grid-single/product-grid-single.component";

const ProductGrid = ({ products, limit }) => {
  return (
    <>
      {products.length > 0 ? products.map((product) => (
         <ProductGridSingle product={product} key={product._id}/>
      )).slice(0,limit): "ไม่พบสินค้าที่คุณต้องการ"}
    </>
  );
};

export default ProductGrid;
