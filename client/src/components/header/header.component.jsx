import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartItemsCount,
} from "../../redux/cart/cart.selector";
import CartDropdowm from "../cart-dropdown/cart-dropdown.component";


const Header = ({countItemInCart , cartItems}) => {

  const handleClick = e => {
    e.currentTarget.nextSibling.classList.toggle("active");
  }

  return (
    <header className="header-area">
      <div className="sticky-bar">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-4">
              <div className="logo">
                {/* <a href=""></a> */}
                <Link to={process.env.PUBLIC_URL + "/"}>IT SHOP</Link>
              </div>
            </div>

            <div className="col-lg-8 d-none d-lg-block">
              <div className="main-menu">
                <nav>
                  <ul>
                    <li>
                      <Link to={process.env.PUBLIC_URL + "/"}>หน้าแรก</Link>
                    </li>
                    <li>
                      <Link to={process.env.PUBLIC_URL + "/shop"}>ร้านค้า</Link>
                    </li>
                    <li>
                      <Link to={process.env.PUBLIC_URL + "/contact"}>
                        ติดต่อ
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <div className="col-lg-2 col-8">
              <div className="header-right-wrap">
                <div className="same-style cart-wrap d-block">
                  <button className="icon-cart" onClick={(e) => handleClick(e)}>
                    <i className="fal fa-shopping-bag"></i>
                    <span className="count-style">{countItemInCart}</span>
                  </button>
                  <CartDropdowm cartItems={cartItems} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = createStructuredSelector({
  countItemInCart: selectCartItemsCount,
  cartItems : selectCartItems
})

export default connect(mapStateToProps)(Header);
