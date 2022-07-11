import React from "react";
import { Link } from "react-router-dom";

import Search from "./Search";

export default function Header({ searchValue, setSearchValue }) {
  return (
    <header>
      <Link to="/">
        <div className="header__left">
          <img width={50} height={45} src="img/logo.svg" alt="Logo" />
          <div className="header__left-text">
            <h2 className="header__name">pc store</h2>
            <div className="header__name-mobile">
              PC <br />
              store
            </div>
            <p>комп'ютерні комплектуючі</p>
          </div>
        </div>
      </Link>

      <Search searchValue={searchValue} setSearchValue={setSearchValue} />

      <Link to="/cart">
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
            <img width={16} height={16} src="img/cart1.svg" alt="Cart" />
            <p>1</p>
          </div>
        </div>
      </Link>
    </header>
  );
}
