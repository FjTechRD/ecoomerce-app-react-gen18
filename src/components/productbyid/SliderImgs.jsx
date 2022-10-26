import React, { useState } from "react";
import "./style/sliderImages.css";

const SliderImgs = ({ product }) => {
  const [imgChanger, setImgChanger] = useState(0);

  const handlePrev = () => {
    if (imgChanger - 1 < 0) {
      setImgChanger(product.productImgs.length - 1);
    } else {
      setImgChanger(imgChanger - 1);
    }
  };

  const handleNext = () => {
    if (imgChanger + 1 > product.productImgs.length - 1) {
      setImgChanger(0);
    } else {
      setImgChanger(imgChanger + 1);
    }
  };

  return (
    <section className="slider">
      <button onClick={handlePrev} className="slider__prev">
        &#60;
      </button>
      <div className="slider__static">
        <div
          style={{ transform: `translateX(calc(-${imgChanger}/ 3 * 100%))` }}
          className="slider__move"
        >
          {product.productImgs.map((url) => (
            <div key={url} className="slider__img-container">
              <img
                className="slider__img"
                src={url}
                alt="product images slider"
              />
            </div>
          ))}
        </div>
      </div>
      <button onClick={handleNext} className="slider__next">
        &#62;
      </button>
    </section>
  );
};

export default SliderImgs;
