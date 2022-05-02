import React from "react";
import { useParams } from "react-router-dom";
import EditProductContainer from "../edit-product-form/edit-product.container";

const AdminEditProduct = () => {
  const params = useParams();
  const { productId } = params;

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h3>ข้อมูลสินค้าในระบบ</h3>
        </div>
      </div>
        <EditProductContainer id={productId}/>
    </div>
  );
};

export default AdminEditProduct;
