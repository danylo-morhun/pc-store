import "./scss/app.scss";
import Header from "./components/Header";
import Categories from "./components/Categories";

function App() {
  return (
    <div className="wrapper">
      <div>
        <Header />
        <Categories />
      </div>
    </div>
  );
}

export default App;
