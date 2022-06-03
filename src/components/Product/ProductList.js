import React, { Component } from "react";
import Product from "./Product";

class ProductList extends Component {
  state = {
    products: [
      { title: "React.js", price: "99$", discout: "20%", id: 1, quantity: 1 },
      { title: "Node.js", price: "89$", discout: "15%", id: 2, quantity: 2 },
      { title: "JavaScript", price: "79$", discout: "10%", id: 3, quantity: 3 },
    ],
  };
  removeHandler = (id) => {
    console.log("delete", id);
    const filteredProducts = this.state.products.filter((p) => p.id !== id);
    this.setState({ products: filteredProducts });
  };

  incrementHandler = (id) => {
    console.log("incremented", id);
    const products = [...this.state.products];
    const findItem = products.find((p) => p.id === id);
    findItem.quantity++;
    this.setState({ products });
  };

  decrementHandler = (id) => {
    console.log("decrement", id);
    const products = [...this.state.products];
    const findItem = products.find((p) => p.id === id);
    if (findItem.quantity === 1) {
      const filteredProducts = this.state.products.filter((p) => p.id !== id);
      this.setState({ products : filteredProducts});
    } else {
      findItem.quantity--;
      this.setState({ products });
    }
  };

  onChangeHandler = (e, id) => {
    // console.log(e.target.value , id);
    const products = [...this.state.products];
    const findItem = products.find((p) => p.id === id);
    findItem.title = e.target.value;
    this.setState({ products });
  };

  render() {
    return (
      <div>
        {this.state.products.map((product, index) => {
          return (
            <Product
              product={product}
              key={index}
              onDelete={() => this.removeHandler(product.id)}
              onIncrement={() => this.incrementHandler(product.id)}
              onDecrement={() => this.decrementHandler(product.id)}
              onChange={(e) => this.onChangeHandler(e, product.id)}
            />
          );
        })}
      </div>
    );
  }
}

export default ProductList;
