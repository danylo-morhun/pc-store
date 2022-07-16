import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSort } from "../redux/filter/slice";

export default function Categories({ categoryId, onChangeCategory }) {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.filter.sort);

  const [sortVisible, setSortVisible] = React.useState(false);

  const onOpenSort = () => {
    setSortVisible(!sortVisible);
  };

  const onChangeSort = (i) => {
    dispatch(setSort(i));
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
            onClick={() => onChangeCategory(i)}
          >
            {categoryName}
          </li>
        ))}
      </ul>

      <div className="sort">
        <img width={10} height={6} src="img/sort-arrow.svg" alt="Expand" />
        <span className="title">Сортувати за:</span>
        <span className="expand" onClick={onOpenSort}>
          {sort.name}
        </span>
      </div>
      {sortVisible && (
        <ul className="sort-expanded">
          {sortList.map((obj, i) => (
            <li
              key={i}
              className={
                sort.sortProperty === obj.sortProperty ? "sort__active" : ""
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
