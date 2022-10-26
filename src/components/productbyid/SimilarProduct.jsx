import axios from "axios";
import React, { useEffect, useState } from "react";
import CartProduct from "../home/CartProduct";

const SimilarProduct = ({ product }) => {
  const [categories, setCategories] = useState();
  const [idCategory, setIdCategory] = useState();
  const [similarProducts, setSimilarProducts] = useState();

  useEffect(() => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/categories`;
    axios
      .get(URL)
      .then((res) => setCategories(res.data.data.categories))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (categories && product) {
      const cb = (category) => category.name === product.category;
      setIdCategory(categories.filter(cb)[0].id);
    }
  }, [categories, product]);

  useEffect(() => {
    if (idCategory) {
      const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products?category=${idCategory}`;
      axios
        .get(URL)
        .then((res) => setSimilarProducts(res.data.data.products))
        .catch((err) => console.log(err));
    }
  }, [idCategory]);

  return (
    <section className="similar-products__container">
      <h2 className="similar-products__name">discover similar products</h2>
      <div className="card__container-similar">
        {similarProducts?.map((prod) => {
          if (product.id !== prod.id) {
            return <CartProduct key={prod.id} product={prod} />;
          }
        })}
      </div>
    </section>
  );
};

export default SimilarProduct;
