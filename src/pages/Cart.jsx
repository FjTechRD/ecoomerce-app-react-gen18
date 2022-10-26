import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/cart/ProductCard";
import { getAllProductsCart, setCartGlobal } from "../store/slices/cart.slice";
import getConfig from "../utils/getConfig";
import "./styles/cart.css";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    dispatch(getAllProductsCart());
  }, []);

  const handlePurchase = () => {
    const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/purchases";
    const data = {
      street: "Green St. 1456",
      colony: "Southwest",
      zipCode: 12345,
      city: "USA",
      references: "Some references",
    };
    axios
      .post(URL, data, getConfig())
      .then((res) => {
        console.log(res.data);
        dispatch(setCartGlobal(null));
      })
      .catch((err) => console.log(err));

    setTotal(0);
  };

  useEffect(() => {
    if (cart) {
      const result = cart.products.reduce((acc, cv) => {
        return acc + Number(cv.price) * cv.productsInCart.quantity;
      }, 0);
      setTotal(result);
    }
  }, [cart]);

  return (
    <div className="cart">
      <div className="cart__container">
        {cart?.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <h2>Total: ${total}</h2>
      <button className="btn__purchases" onClick={handlePurchase}>
        Buy Now
      </button>
    </div>
  );
};

export default Cart;
