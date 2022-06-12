import React, { createContext, useState } from "react";
import "./App.css";
import CounterOne from "./components/Context/CounterOne";
import CounterProvider from "./components/Context/CounterProvider";
import Wrapper from "./components/hoc/Wrapper";
import NavBar from "./components/Navbar/NavBar";
import ProductList from "./components/Product/ProductList";
import CountReducerTwo from "./components/Reducer/CountReducer";

class App extends React.Component {
  state = {
    products: [
      { title: "React.js", price: "99$", id: 1, quantity: 1 },
      { title: "Node.js", price: "89$", id: 2, quantity: 2 },
      { title: "JavaScript", price: "79$", id: 3, quantity: 3 },
    ],
    isShow: true,
    count: 0,
  };
  removeHandler = (id) => {
    const filteredProducts = this.state.products.filter((p) => p.id !== id);
    this.setState({ products: filteredProducts });
  };

  incrementHandler = (id) => {
    const index = this.state.products.findIndex((item) => item.id === id);

    const product = { ...this.state.products[index] };
    product.quantity++;
    const products = [...this.state.products];
    products[index] = product;
    this.setState({ products });
  };

  decrementHandler = (id) => {
    // 1. id=ok
    const index = this.state.products.findIndex((item) => item.id === id);
    //  2. index = ok
    // 3. clone the selected  index and updaate the quantity
    const product = { ...this.state.products[index] };
    if (product.quantity === 1) {
      const filteredProducts = this.state.products.filter((p) => p.id !== id);
      this.setState({ products: filteredProducts });
    } else {
      // 4. updated products
      const products = [...this.state.products];
      product.quantity--;
      products[index] = product;
      this.setState({ products });
    }
  };

  onChangeHandler = (e, id) => {
    const index = this.state.products.findIndex((item) => item.id === id);
    const product = { ...this.state.products[index] };
    product.title = e.target.value;
    const products = [...this.state.products];
    products[index] = product;
    this.setState({ products });
  };

  render() {
    return (
      <>
        <CounterProvider>
          <p>Wellcom to Context.</p>
          <CountReducerTwo />
        </CounterProvider>

        {/* <NavBar totalItems={this.state.products.length} />
            <ProductList
              products={this.state.products}
              onDelete={this.removeHandler}
              onIncrement={this.incrementHandler}
              onDecrement={this.decrementHandler}
              onChange={this.onChangeHandler}
            /> */}
      </>
    );
  }
}

export default Wrapper(App, "container");
