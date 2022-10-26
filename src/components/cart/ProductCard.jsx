import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { getAllProductsCart } from "../../store/slices/cart.slice";
import getConfig from "../../utils/getConfig";
import "./styles/productCard.css";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`;
    axios
      .delete(URL, getConfig())
      .then((res) => {
        console.log(res.data);
        dispatch(getAllProductsCart());
      })
      .catch((err) => console.log(err));
  };

  return (
    <article className="product__card">
      <h2 className="product-card__name">{product.title}</h2>
      <ul className="product-card__list">
        <li className="product-card__info">
          <span>Price</span> ${product.price}
        </li>
        <li className="product-card__info">
          <span>Quantity </span>
          {product.productsInCart.quantity}
        </li>
      </ul>
      <button onClick={handleDelete} className="btn__cart">
        <i className="fa-solid fa-trash-can"></i>
      </button>
    </article>
  );
};

export default ProductCard;
