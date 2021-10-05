import React from "react";
import { connect } from "react-redux";
import ProductCard from "./card/card";

const mapStateToProps = (state) => ({
  products: state.shop.products,
});

const ServiceSection = ({ products }) => {
  return (
    <div>
      {console.log(products)}
      {products
        ? products.map((data, index) => {
            return (
              <ProductCard
                Product={data} 
              />
            );
          })
        : null}
    </div>
  );
};



export default connect(mapStateToProps)(ServiceSection);
