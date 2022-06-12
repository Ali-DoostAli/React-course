import React, { createContext, useState } from "react";
import "./App.css";
import CounterOne from "./components/Context/CounterOne";
import CounterProvider from "./components/Context/CounterProvider";
import Wrapper from "./components/hoc/Wrapper";
import NavBar from "./components/Navbar/NavBar";
import ProductList from "./components/Product/ProductList";
import CountReducerTwo from "./components/Reducer/CountReducer";

const App = () => {
  const [products, setProducts] = useState([
    { title: "React.js", price: "99$", id: 1, quantity: 1 },
    { title: "Node.js", price: "89$", id: 2, quantity: 2 },
    { title: "JavaScript", price: "79$", id: 3, quantity: 3 },
  ]);

  const removeHandler = (id) => {
    const filteredProducts = products.filter((p) => p.id !== id);
    setProducts(filteredProducts );
  };

  const incrementHandler = (id) => {
    const index = products.findIndex((item) => item.id === id);

    const product = { ...products[index] };
    product.quantity++;
    const updatedProducts = [...products];
    updatedProducts[index] = product;
    setProducts( updatedProducts );
  };

  const decrementHandler = (id) => {
    const index = products.findIndex((item) => item.id === id);

    const product = { ...products[index] };
    if (product.quantity === 1) {
      const filteredProducts = products.filter((p) => p.id !== id);
      setProducts( filteredProducts );
    } else {
      const updatedProducts = [...products];
      product.quantity--;
      updatedProducts[index] = product;
      setProducts( updatedProducts );
    }
  };

  const onChangeHandler = (e, id) => {
    const index = products.findIndex((item) => item.id === id);
    const product = { ...products[index] };
    product.title = e.target.value;
    const updatedProducts = [...products];
    updatedProducts[index] = product;
    setProducts( updatedProducts );
  };

  return (
    <>
      <NavBar totalItems={products.length} />
      <ProductList
        products={products}
        onDelete={removeHandler}
        onIncrement={incrementHandler}
        onDecrement={decrementHandler}
        onChange={onChangeHandler}
      />
    </>
  );
};

export default App;
