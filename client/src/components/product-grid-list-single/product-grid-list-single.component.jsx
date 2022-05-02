import React from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';

import {addItem} from '../../redux/cart/cart.actions';

import currencyFormatter from "../../assets/utils/currency.format";

const ProductGridListSingle = ({ product , addItemToCart }) => {
  const { name, imageUrl, price } = product;

  return (
    <>
      <div className="col-xl-4 col-sm-6">
        <div className="product-wrap mb-4">
          <div className="product-img">
            <Link to={process.env.PUBLIC_URL + "/shop/" + name}>
              <img src={imageUrl} className="default-img" alt="" />
            </Link>
            {product.new ? (
              <span className="product-img-badges">ใหม่</span>
            ) : null}

            <div className="product-action">
                <div className="pro-same-action pro-cart">
                    <button type="button" onClick={() => addItemToCart(product)}>
                        <i className="fal fa-cart-plus"></i>
                    </button>
                </div>
            </div>
          </div>

          <div className="product-content text-center">
            <h3>
              <Link to={process.env.PUBLIC_URL + "/shop/" + name}>{name}</Link>
            </h3>
            <div className="product-price">
              <span>{currencyFormatter.format(price)}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCart : (item) => dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(ProductGridListSingle);
