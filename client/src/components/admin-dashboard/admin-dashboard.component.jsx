import React from "react";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import { fetchDataStart} from '../../redux/shop/shop.actions';

import AdminProductListContainer from "../admin-product-list/admin-product-list.container";

const AdminDashboard = ({ products }) => {
  return (
    <div className="admin-dashboard">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="d-flex justify-content-between">
              <h3>ข้อมูลสินค้าในระบบ</h3>

              <Link to={process.env.PUBLIC_URL + "/admin/add_product"} className="btn btn-success">
                  เพิ่มสินค้า
              </Link>
            </div>
          </div>
          <div className="col-lg-12">
            <table className="table table-hover  table-striped">
              <thead>
                <tr>
                  <th>ชื่อสินค้า</th>
                  <th>รูปสินค้า</th>
                  <th>ราคา</th>
                  <th>ชนิดสินค้า</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <AdminProductListContainer/>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};


const mapDispatchToProps = dispatch => ({
  fetchStart : () => dispatch(fetchDataStart())
})

export default connect(null , mapDispatchToProps)(AdminDashboard);
