import axios from "axios";
import React, { useState } from "react";
import getConfig from "../../utils/getConfig";
import "./style/productInfo.css";

const ProductInfo = ({ product }) => {
  const [counter, setCounter] = useState(1);

  const handleMinux = () => {
    if (counter - 1 > 0) {
      setCounter(counter - 1);
    }
  };
  const handlePlus = () => {
    setCounter(counter + 1);
  };

  const handleAddCart = () => {
    const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/cart";
    const data = {
      id: product.id,
      quantity: counter,
    };
    axios
      .post(URL, data, getConfig())
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <article className="product__info">
      <h2 className="product-info__name">{product?.title}</h2>
      <p className="product-info__description">{product?.description}</p>
      <footer className="product-info__footer">
        <div className="product-info__price-container">
          <h3 className="product-info__price-label">price</h3>
          <span className="product-info__price-number">{product?.price}</span>
        </div>
        <div className="product-info__quantity-container">
          <h3 className="product-info__quantity-label">quantity</h3>
          <div className="counter">
            <div onClick={handleMinux} className="counter__minus">
              -
            </div>
            <div className="counter__number">{counter}</div>
            <div onClick={handlePlus} className="counter__plus">
              +
            </div>
          </div>
        </div>
        <button className="product-info__btn" onClick={handleAddCart}>
          add to Card <i className="fa-solid fa-cart-arrow-down"></i>
        </button>
      </footer>
    </article>
  );
};

export default ProductInfo;
