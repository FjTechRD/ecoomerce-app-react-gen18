import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./style/cartProduct.css";
import getConfig from "../../utils/getConfig";
import { useDispatch } from "react-redux";
import { getAllProductsCart } from "../../store/slices/cart.slice";

const CartProduct = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigation = () => {
    navigate(`/product/${product.id}`);
  };

  const handleAddCart = (e) => {
    e.stopPropagation();
    const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/cart";
    const data = { id: product.id, quantity: 1 };
    axios
      .post(URL, data, getConfig())
      .then((res) => {
        console.log(res.data);
        dispatch(getAllProductsCart());
      })
      .catch((err) => console.log(err));
  };

  return (
    <article className="product" onClick={handleNavigation}>
      <header className="product__header">
        <img
          className="product__img"
          src={product.productImgs[0]}
          alt="product__img"
        />
      </header>
      <section className="product__body">
        <h3 className="product__name">{product.title}</h3>
        <div className="product__price">
          <span className="product__price-label">price</span>
          <p className="product__price-number">{product.price}</p>
        </div>
        <button onClick={handleAddCart} className="product__icon-container">
          <i className="fa-solid fa-cart-shopping"></i>
        </button>
      </section>
    </article>
  );
};

export default CartProduct;
