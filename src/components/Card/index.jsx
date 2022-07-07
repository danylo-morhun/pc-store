import React from "react";

export default function Card({
  id,
  imageUrl,
  title,
  price,
  itemPackage,
  model,
}) {
  const [cartCount, setCartCount] = React.useState(0);
  const [activePackage, setActivePackage] = React.useState(0);
  const [activeModel, setActiveModel] = React.useState(0);

  const onAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  const onChangePackage = (i) => {
    setActivePackage(i);
  };

  const onChangeModel = (i) => {
    setActiveModel(i);
  };

  return (
    <div className="iteb__block-wrapper">
      <div className="card">
        <div className="item__block">
          <img width={265} height={265} src={imageUrl} alt="Item" />
          <h3>{title}</h3>
          <div className="item__choose-block">
            <ul className="item__choose-first">
              {itemPackage.map((value, i) => (
                <li
                  key={value}
                  onClick={() => onChangePackage(i)}
                  className={activePackage === i ? "active" : ""}
                >
                  {value}
                </li>
              ))}
            </ul>
            <ul className="item__choose-second">
              {model.map((value, i) => (
                <li
                  key={value}
                  onClick={() => onChangeModel(i)}
                  className={activeModel === i ? "active" : ""}
                >
                  {value}
                </li>
              ))}
            </ul>
          </div>
          <div className="item__price-cart">
            <span className="item__price">від {price} ₴</span>
            <button className="item__add-to-cart" onClick={onAddToCart}>
              <img src="img/add-to-cart.svg" alt="Plus" />
              <span>Додати</span>
              <div className="item__added-count">{cartCount}</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
