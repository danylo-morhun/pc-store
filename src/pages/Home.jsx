import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Categories from "../components/Categories";
import Card from "../components/Card";
import Skeleton from "../components/Card/Skeleton";
import { SearchContext } from "../App";
import { setCategoryId } from "../redux/filter/slice";

function Home() {
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.filter.categoryId);
  const sortType = useSelector((state) => state.filter.sort);

  const { searchValue } = React.useContext(SearchContext);

  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
    console.log(categoryId);
  };

  React.useEffect(() => {
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const order = sortType.sortProperty === "rating" ? "desc" : "asc";
    const search = searchValue ? `&search=${searchValue}` : "";

    setIsLoading(true);
    fetch(
      `https://62c5cf49a361f725128f2c86.mockapi.io/items?${category}&sortBy=${sortType.sortProperty}&order=${order}${search}`
    )
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue]);

  const goods = items.map((obj) => <Card key={obj.id} {...obj} />);
  const skeletons = [...new Array(8)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <>
      <Categories categoryId={categoryId} onChangeCategory={onChangeCategory} />
      <h2 className="wrapper__title">Усі комплектуючі</h2>
      <div className="card-flex-center">
        <div className="card-flex">{isLoading ? skeletons : goods}</div>
      </div>
    </>
  );
}

export default Home;
