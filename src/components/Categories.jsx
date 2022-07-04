import React from "react";

export default function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const onChangeIndex = (i) => {
    setActiveIndex(i);
  };

  const categories = [
    "Усе",
    "Процесори",
    "Відеокарти",
    "ОЗП",
    "Кулери",
    "Корпуси",
  ];

  return (
    <div className="categories">
      <ul className="categories__list">
        {categories.map((value, i) => (
          <li
            className={activeIndex === i ? "active" : ""}
            onClick={() => onChangeIndex(i)}
          >
            {value}
          </li>
        ))}
      </ul>

      <div className="sort">
        <img width={10} height={6} src="img/sort-arrow.svg" alt="Expand" />
        <span className="title">Сортувати за:</span>
        <span className="expand">популярністю</span>
      </div>
      <ul className="sort-expanded">
        <li>популярністю</li>
        <li>ціною</li>
        <li>алфавітом</li>
      </ul>
    </div>
  );
}
