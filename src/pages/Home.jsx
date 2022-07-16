import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import Categories from "../components/Categories";
import Card from "../components/Card";
import Skeleton from "../components/Card/Skeleton";
import { SearchContext } from "../App";
import { setCategoryId } from "../redux/filter/slice";

function Home() {
  const dispatch = useDispatch();
  const { categoryId, sort } = useSelector((state) => state.filter);

  const { searchValue } = React.useContext(SearchContext);

  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
    console.log(categoryId);
  };

  React.useEffect(() => {
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const order = sort.sortProperty === "rating" ? "desc" : "asc";
    const search = searchValue ? `&search=${searchValue}` : "";

    setIsLoading(true);
    axios
      .get(
        `https://62c5cf49a361f725128f2c86.mockapi.io/items?${category}&sortBy=${sort.sortProperty}&order=${order}${search}`
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });

    window.scrollTo(0, 0);
  }, [categoryId, sort, searchValue]);

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
