import React from "react";

export default function Header() {
  return (
    <header>
      <div className="header__left">
        <img width={50} height={45} src="img/logo.svg" alt="Logo" />
        <div className="header__left-text">
          <h2>pc store</h2>
          <p>комп'ютерні комплектуючі</p>
        </div>
      </div>

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
