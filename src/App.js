import "./App.css";
import Wrapper from "./components/hoc/Wrapper";
import NavBar from "./components/Navbar/NavBar";
import ProductList from "./components/Product/ProductList";
import ProductProvider from "./components/Provider/ProductProvider";

const App = () => {
  return (
    <>
      <ProductProvider>
        <NavBar />
        <ProductList />
      </ProductProvider>
    </>
  );
};

export default Wrapper(App, "container");
