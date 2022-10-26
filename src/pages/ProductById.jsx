import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductInfo from "../components/productbyid/ProductInfo";
import SimilarProduct from "../components/productbyid/SimilarProduct";
import SliderImgs from "../components/productbyid/SliderImgs";
import "./styles/productById.css";

const ProductById = () => {
  const [product, setProduct] = useState();
  const { id } = useParams();

  useEffect(() => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`;
    axios
      .get(URL)
      .then((res) => setProduct(res.data.data.product))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="productById__container">
      {product && <SliderImgs product={product} />}
      <ProductInfo product={product} />
      <SimilarProduct product={product} />
    </div>
  );
};

export default ProductById;
