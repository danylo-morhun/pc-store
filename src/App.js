import React from "react";

import Header from "./components/Header";
import Categories from "./components/Categories";
import Card from "./components/Card";

import "./scss/app.scss";

function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch("https://62c5cf49a361f725128f2c86.mockapi.io/items")
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <Categories />
      <h2 className="wrapper__title">Усі комплектуючі</h2>
      <div className="card-flex">
        {items.map((obj) => (
          <Card key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
}

export default App;
