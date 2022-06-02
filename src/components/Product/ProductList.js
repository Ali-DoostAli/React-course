import React, { Component } from "react";
import Product from "./Product";

class ProductList extends Component {
  state = {
    products: [
      { title: "React.js", price: "99$", discout: "20%", id: 1 },
      { title: "Node.js", price: "89$", discout: "15%", id: 2 },
      { title: "JavaScript", price: "79$", discout: "10%", id: 3 },
    ],
  };
  removeHandler = (id) => {
    console.log("delete", id);
    const filteredProducts = this.state.products.filter((p) => p.id !== id);
    this.setState({ products: filteredProducts });
  };
  render() {
    return (
      <div>
        {this.state.products.map((product, index) => {
          return (
            <Product
              name={product.title}
              price={product.price}
              key={index}
              discout={product.discout}
              onDelete={() => this.removeHandler(product.id)}
            />
          );
        })}
      </div>
    );
  }
}

export default ProductList;
