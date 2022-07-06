import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <div className="header__left">
          <img width={50} height={45} src="img/logo.svg" alt="Logo" />
          <div className="header__left-text">
            <h2 className="header__name">pc store</h2>
            <p>комп'ютерні комплектуючі</p>
          </div>
        </div>
      </Link>

      <div className="header__right">
        <div className="header__right-price">2599 ₴</div>
        <img
          width={1}
          height={25}
          src="img/cart-line.svg"
          alt="Vertical Line"
          className="header__right-line"
        />
        <div className="header__right-cart">
          <img width={16} height={16} src="img/cart.svg" alt="Cart" />
          <p>1</p>
        </div>
      </div>
    </header>
  );
}
