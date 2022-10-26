import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartProduct from "../components/home/CartProduct";
import InputSearch from "../components/home/InputSearch";
import { getAllProducts } from "../store/slices/products.slice";
import "./styles/home.css";

const Home = () => {
  const [inputText, setInputText] = useState("");
  const [filterByText, setFilterByText] = useState();
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  useEffect(() => {
    if (inputText !== "" && products) {
      const cb = (product) =>
        product.title
          .toLowerCase()
          .includes(inputText.toLocaleLowerCase().trim());
      setFilterByText(products.filter(cb));
    } else {
      setFilterByText(products);
    }
  }, [inputText, products]);

  return (
    <main className="home">
      <div className="search__input">
        <InputSearch
          inputText={inputText}
          setInputText={setInputText}
          id="searchInput"
        />
      </div>

      <div className="home__container">
        {filterByText?.map((product) => (
          <CartProduct key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default Home;
