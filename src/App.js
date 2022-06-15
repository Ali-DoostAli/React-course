import "./App.css";
import Filter from "./components/Filter/Filter";
import Wrapper from "./components/hoc/Wrapper";
import NavBar from "./components/Navbar/NavBar";
import ProductList from "./components/Product/ProductList";
import ProductProvider from "./components/Provider/ProductProvider";

const App = () => {
  return (
    <>
      <ProductProvider>
        <NavBar />
        <Filter />
        <ProductList />
      </ProductProvider>
    </>
  );
};

export default Wrapper(App, "container");
