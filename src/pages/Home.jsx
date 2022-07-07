import React from "react";

import Categories from "../components/Categories";
import Card from "../components/Card";
import Skeleton from "../components/Card/Skeleton.jsx";

function Home() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://62c5cf49a361f725128f2c86.mockapi.io/items")
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Categories />
      <h2 className="wrapper__title">Усі комплектуючі</h2>
      <div className="card-flex-center">
        <div className="card-flex">
          {isLoading
            ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
            : items.map((obj) => <Card key={obj.id} {...obj} />)}
        </div>
      </div>
    </>
  );
}

export default Home;
