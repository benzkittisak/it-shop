import React, { useEffect } from "react";
import { Routes, Route, Navigation } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "../../redux/user/user.selector";
import { checkUserSession } from "../../redux/user/user.actions";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";
import { fetchDataStart } from "../../redux/shop/shop.actions";

import AdminAddProduct from "../../components/admin-add-product/admin-add-product.component";
import AdminDashboard from "../../components/admin-dashboard/admin-dashboard.component";
import AdminLayout from "../../layout/admin.layout";
import AdminEditProduct from "../../components/admin-edit-product/admin-edit-product.component";
import AdminLogin from "../../components/admin-login/admin-login.component";

const AdminPage = ({ productsLoad, currentUser, checkUser }) => {

  useEffect(() => {
    productsLoad();
    checkUser();
  }, [checkUser]);
  return (
    <>
      {currentUser && currentUser.isAdmin ? (
        <AdminLayout>
          <div className="admin-page">
            <Routes>
              <Route exact path="/" element={<AdminDashboard/>} />
              <Route path="/add_product" element={<AdminAddProduct />} />
              <Route path="/edit/:productId" element={<AdminEditProduct />} />
            </Routes>
          </div>
        </AdminLayout>
      ) : (
        <Routes>
          <Route exact path="/" element={<AdminLogin />} />
        </Routes>
      )}
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser
})

const mapDispatchToProps = (dispatch) => ({
  checkUser: () => dispatch(checkUserSession()),
  productsLoad: () => dispatch(fetchDataStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
