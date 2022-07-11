import React from "react";

import Categories from "../components/Categories";
import Card from "../components/Card";
import Skeleton from "../components/Card/Skeleton";

function Home({ searchValue }) {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: "популярністю",
    sortProperty: "rating",
  });

  React.useEffect(() => {
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const order = sortType.sortProperty === "rating" ? "desc" : "asc";
    setIsLoading(true);
    fetch(
      `https://62c5cf49a361f725128f2c86.mockapi.io/items?${category}&sortBy=${sortType.sortProperty}&order=${order}`
    )
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType]);

  const goods = items
    .filter((obj) => {
      if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((obj) => <Card key={obj.id} {...obj} />);
  const skeletons = [...new Array(8)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <>
      <Categories
        categoryId={categoryId}
        sortType={sortType}
        onClickCategory={(i) => setCategoryId(i)}
        onClickSort={(i) => setSortType(i)}
      />
      <h2 className="wrapper__title">Усі комплектуючі</h2>
      <div className="card-flex-center">
        <div className="card-flex">{isLoading ? skeletons : goods}</div>
      </div>
    </>
  );
}

export default Home;
