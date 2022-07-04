import React from "react";

export default function Card() {
  return (
    <div className="card">
      <div className="item__block">
        <img
          width={265}
          height={265}
          src="img/goods/core-i3.png"
          alt="Intel Core i3"
        />
        <h3>Intel Core i3</h3>
        <div className="item__choose-block">
          <ul className="item__choose-first">
            <li>BOX</li>
            <li>OEM</li>
          </ul>
          <ul className="item__choose-second">
            <li>10100F</li>
            <li>10105F</li>
            <li>12100F</li>
          </ul>
        </div>
        <div className="item__price-cart">
          <span className="item__price">від 2599 ₴</span>
          <button className="item__add-to-cart">
            <img src="img/add-to-cart.svg" alt="Plus" />
            <span>Додати</span>
            <div className="item__added-count">0</div>
          </button>
        </div>
      </div>
    </div>
  );
}
