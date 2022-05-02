import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import currencyFormatter from "../../assets/utils/currency.format";

import { clearItemFromCart } from "../../redux/cart/cart.actions";

import { calTotalPrice } from "../../redux/cart/cart.selector";

const CartDropdowm = ({ cartItems, totalPrice, clearItem }) => {
  return (
    <div className="shopping-cart-content">
      {cartItems.length > 0 ? (
        <>
          <ul>
            {cartItems.map((item, index) => {
              const { name, price, quantity, imageUrl } = item;
              const finalPrice = currencyFormatter.format(price);

              return (
                <li className="single-shopping-cart" key={index}>
                  <div className="shopping-cart-img">
                    <img src={imageUrl} alt="" />
                  </div>
                  <div className="shopping-cart-title">
                    <h4>{name}</h4>
                    <h6>จำนวน: {quantity}</h6>
                    <span>
                      ราคา : <br />
                      {finalPrice}
                    </span>
                  </div>
                  <div className="shopping-cart-delete">
                    <button onClick={() => clearItem(item)}>
                      <i className="fad fa-times"></i>
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="shopping-cart-total">
            <h4>
              รวมเงิน
              <span className="shop-total">
                {currencyFormatter.format(totalPrice)}
              </span>
            </h4>
          </div>
          <div className="shopping-cart-btn text-center">
            <Link
              className="default-btn hvr-sweep-to-right"
              to={process.env.PUBLIC_URL + "/cart"}
            >
              ดูตะกร้าสินค้า
            </Link>
          </div>
        </>
      ) : (
        <p className="text-center">ไม่มีสินค้าในตะกร้า</p>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  totalPrice: calTotalPrice,
});

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdowm);
