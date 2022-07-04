import React from "react";

import Header from "./components/Header";
import Categories from "./components/Categories";
import Card from "./components/Card";

import "./scss/app.scss";

import goods from "./assets/goods.json";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Categories />
      <h2 className="wrapper__title">Усі комплектуючі</h2>
      <div className="card-flex">
        {goods.map((obj) => (
          <Card {...obj} />
        ))}
      </div>
    </div>
  );
}

export default App;
