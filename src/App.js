import "./scss/app.scss";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Card from "./components/Card";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Categories />
      <h2 className="wrapper__title">Усі комплектуючі</h2>
      <div className="card-flex">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
