import React from "react";
import { Link } from "react-router-dom";

export default function Cart(id, imageUrl, title, price, itemPackage, model) {
  return (
    <div className="cart">
      <div className="cart__top">
        <div className="cart__top-left">
          <img width={29} height={29} src="img/cart2.svg" alt="Cart" />
          <h2>Кошик</h2>
        </div>
        <div className="cart__top-right">
          <img width={20} height={20} src="img/trash-bin.svg" alt="Clear" />
          <span>Очистити кошик</span>
        </div>
      </div>

      <div className="cart__item-block">
        <div className="cart__item-first">
          <img width={80} height={80} src="img/goods/core-i3.png" alt="Item" />
          <div className="cart__item-text">
            <h3>Intel Core i3</h3>
            <span>10100F, BOX.</span>
          </div>
        </div>

        <div className="cart__item-second">
          <button className="item__add-to-cart">
            <img src="img/add-to-cart.svg" alt="Plus" />
          </button>
          <span className="item__added-count">3</span>
          <button className="item__add-to-cart">
            <img src="img/remove-from-cart.svg" alt="Minus" />
          </button>
        </div>

        <div className="cart__items-last">
          <div className="cart__item-third">
            <h3>7797 ₴</h3>
          </div>

          <div className="cart__item-fourth">
            <button>
              <img src="img/delete-from-cart.svg" alt="Delete" />
            </button>
          </div>
        </div>
      </div>

      <div className="cart__bottom-text">
        <span className="cart__bottom-left">Усього товарів: 3 од.</span>
        <span className="cart__bottom-right">
          До сплати: <b>7797 ₴</b>
        </span>
      </div>
      <div className="cart__bottom-buttons">
        <Link to="/">
          <button className="cart__button-back">
            <img width={6} height={12} src="img/back.svg" alt="Back" />
            <span>Повернутися назад</span>
          </button>
        </Link>
        <button className="cart__button-pay">
          <span>Сплатити онлайн</span>
        </button>
      </div>
    </div>
  );
}
