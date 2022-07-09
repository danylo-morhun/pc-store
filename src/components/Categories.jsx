import React from "react";

export default function Categories({
  categoryId,
  sortType,
  onClickCategory,
  onClickSort,
}) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [sortVisible, setSortVisible] = React.useState(false);
  const [sortActive, setSortActive] = React.useState(0);

  const onChangeIndex = (i) => {
    setActiveIndex(i);
  };

  const onOpenSort = () => {
    setSortVisible(!sortVisible);
  };

  const onChangeSort = (i) => {
    setSortActive(i);
    onOpenSort();
  };

  const categories = [
    "Усе",
    "Процесори",
    "Відеокарти",
    "ОЗП",
    "Кулери",
    "Корпуси",
  ];

  const sortList = ["популярністю", "ціною", "алфавітом"];

  return (
    <div className="categories">
      <ul className="categories__list">
        {categories.map((categoryName, i) => (
          <li
            key={i}
            className={categoryId === i ? "active" : ""}
            onClick={() => onClickCategory(i)}
          >
            {categoryName}
          </li>
        ))}
      </ul>

      <div className="sort">
        <img width={10} height={6} src="img/sort-arrow.svg" alt="Expand" />
        <span className="title">Сортувати за:</span>
        <span className="expand" onClick={onOpenSort}>
          {sortList[sortActive]}
        </span>
      </div>
      {sortVisible && (
        <ul className="sort-expanded">
          {sortList.map((value, i) => (
            <li
              key={i}
              className={sortActive === i ? "sort__active" : ""}
              onClick={() => onChangeSort(i)}
            >
              {value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
