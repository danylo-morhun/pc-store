import React from "react";

export default function Categories() {
  return (
    <div className="categories">
      <ul className="categories__list">
        <li>
          <div className="categories__square">
            <span>Усе</span>
          </div>
        </li>
        <li>
          <div className="categories__square">
            <span>Процесори</span>
          </div>
        </li>
        <li>
          <div className="categories__square">
            <span>Відеокарти</span>
          </div>
        </li>
        <li>
          <div className="categories__square">
            <span>ОЗП</span>
          </div>
        </li>
        <li>
          <div className="categories__square">
            <span>Кулери</span>
          </div>
        </li>
        <li>
          <div className="categories__square">
            <span>Корпуси</span>
          </div>
        </li>
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
