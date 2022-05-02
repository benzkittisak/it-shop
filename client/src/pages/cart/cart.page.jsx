import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

import currencyFormatter from "../../assets/utils/currency.format";

import { selectCartItems, calTotalPrice } from "../../redux/cart/cart.selector";

import { clearCart } from "../../redux/cart/cart.actions";

import MasterLayout from "../../layout/master.layout";
import CartTable from "../../components/cart-table/cart-table.component";

const CartPage = ({ cartItems, totalPrice, clearCart }) => {

    const handlePayment = e => {
        Swal.fire({
            text:"ต้องการชำระเงินใช่หรือไม่",
            showCancelButton:true,
            confirmButtonText:'ชำระเงิน'
        }).then((res)=> {
            if(res.isConfirmed){
                Swal.fire('ชำระเงินสำเร็จ','','success');
                clearCart();
            }
        })
    }


  return (
    <MasterLayout>
      <div className="cart-main-area py-5">
        <div className="container">
          {cartItems.length >= 1 ? (
            <>
              <h3 className="cart-page-title">สินค้าในตะกร้า</h3>
              <div className="row">
                <div className="col-12">
                  <div className="table-content table-responsive cart-table-content">
                    <CartTable cartItems={cartItems} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="cart-shipping-update-wrapper">
                    <div className="cart-shipping-update">
                      <Link to={process.env.PUBLIC_URL + "/shop"}>
                        เลือกซื้อสินค้าต่อ
                      </Link>
                    </div>
                    <div className="cart-clear">
                      <button onClick={() => clearCart()}>
                        ล้างตะกร้าสินค้า
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className=" offset-lg-8 col-lg-4 my-2 col-12">
                  <div className="grand-total">
                    <div className="title-wrap">
                      <h4 className="cart-bottom-title section-bg-gray-cart">
                        รวมเงิน
                      </h4>
                    </div>
                    <h5>
                      ราคารวม
                      <span>{currencyFormatter.format(totalPrice)}</span>
                    </h5>
                    <div className="grand-total-title">
                        <h4>
                            ราคารวมที่ต้องจ่าย
                            <span>
                                {currencyFormatter.format(totalPrice)}
                            </span>
                        </h4>
                    </div>
                    <button onClick={handlePayment} className="payment">
                        ชำระเงิน
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="row">
              <div className="col-lg-12">
                <div className="item-empty-area text-center">
                  <div className="item-empty-area__icon mb-3">
                    <i className="fal fa-shopping-cart"></i>
                  </div>
                  <div className="item-empty-area__text">
                    ไม่มีสินค้าในตะกร้า
                    <br />
                    <Link to={process.env.PUBLIC_URL + "/shop"}>
                      ไปซื้อสินค้าเลย !!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </MasterLayout>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: calTotalPrice,
});

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
