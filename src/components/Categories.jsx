import React from "react";

export default function Categories({
  categoryId,
  sortType,
  onClickCategory,
  onClickSort,
}) {
  const [sortVisible, setSortVisible] = React.useState(false);

  const onChangeIndex = (i) => {
    onClickSort(i);
  };

  const onOpenSort = () => {
    setSortVisible(!sortVisible);
  };

  const onChangeSort = (i) => {
    onChangeIndex(i);
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

  const sortList = [
    { name: "популярністю", sortProperty: "rating" },
    { name: "ціною", sortProperty: "price" },
    { name: "алфавітом", sortProperty: "title" },
  ];

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
          {sortType.name}
        </span>
      </div>
      {sortVisible && (
        <ul className="sort-expanded">
          {sortList.map((obj, i) => (
            <li
              key={i}
              className={
                sortType.sortProperty === obj.sortProperty ? "sort__active" : ""
              }
              onClick={() => onChangeSort(obj)}
            >
              {obj.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
