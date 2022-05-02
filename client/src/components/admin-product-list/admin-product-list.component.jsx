import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {selectCollectionsForPreview} from '../../redux/shop/shop.selector';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';

import currencyFormatter from "../../assets/utils/currency.format";

const AdminProductList = ({ products }) => {
  const deleteProduct = (id) => {
    let confirm = window.confirm("คุณต้องการลบสินค้านี้ใช่หรือไม่");

    if (confirm) {
      axios
        .delete(`http://localhost:4000/api/product/del/${id}`)
        .then((res) => {
          console.log(res);
          if (res.data) {
            alert("ลบสินค้าสำเร็จ");
            window.location.reload();
          }
        });
    }
  };

  return (
    <>
      {products.map(({_id , name , imageUrl , type , price}) => (
        <tr key={_id}>
          <td>{name}</td>
          <td width="10%">
            <img src={imageUrl} className="img-fluid" />
          </td>
          <td>{currencyFormatter.format(price)}</td>
          <td>{type.join(",")}</td>
          <td>
            <div className="btn-group" role="group" aria-label="Basic example">
              <Link
                to={process.env.PUBLIC_URL + "/admin/edit/" + _id}
                className="btn btn-warning"
              >
                แก้ไข
              </Link>
              <button
                type="button"
                onClick={() => deleteProduct(_id)}
                className="btn btn-danger"
              >
                ลบ
              </button>
            </div>
          </td>
        </tr>
      ))}
    </>
  );
};
const mapStateToProps = createStructuredSelector({
  products:selectCollectionsForPreview
})


export default connect(mapStateToProps)(AdminProductList);
