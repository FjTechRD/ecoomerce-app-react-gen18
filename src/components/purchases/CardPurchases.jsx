import React from "react";
import "./style/cardPurchases.css";

const CardPurchases = ({ purchase }) => {
  return (
    <article className="purchase-card__container">
      <header className="purchase-card__date">{purchase.updatedAt}</header>
      <div className="purchase-card__products">
        {purchase.cart.products.map((product) => (
          <section key={product.id}>
            <h3 className="purchase-card__products-title">{product.title}</h3>
            <div className="purchase-card__products-quantity">
              <span>Quantity:</span> {product.productsInCart.quantity}
            </div>
            <div className="purchase-card__products-price">
              <span>Price:</span> ${product.price}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
};

export default CardPurchases;
