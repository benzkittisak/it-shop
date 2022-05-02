import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchDataStart } from "../../redux/shop/shop.actions";

import HomeSlide from "../../components/home-slide/home-slide.componenet";
import ProductOverviewContainer from "../../components/product-overview/product-overview.container";

import MasterLayout from '../../layout/master.layout'

const HomePage = ({ products, productsLoad }) => {
  useEffect(() => {
    productsLoad();
  }, []);
  return (
    <MasterLayout>
      <div className="home-page">
        <HomeSlide />
         <ProductOverviewContainer /> 
      </div>
    </MasterLayout>
  );
};

const mapDispatchToProps = (dispatch) => ({
  productsLoad: () => dispatch(fetchDataStart()),
});

export default connect(null, mapDispatchToProps)(HomePage);
