import React, { useState } from "react";
import "./App.css";
import ClassCounter from "./components/ClassCounter";
import FunctionalCounter from "./components/FunctionalCounter";
import NavBar from "./components/Navbar/NavBar";
import ProductList from "./components/Product/ProductList";

class App extends React.Component {
  state = {
    products: [
      { title: "React.js", price: "99$", id: 1, quantity: 1 },
      { title: "Node.js", price: "89$", id: 2, quantity: 2 },
      { title: "JavaScript", price: "79$", id: 3, quantity: 3 },
    ],
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
      <div className="container" id="title">
        <ClassCounter />
        <FunctionalCounter />
        {/* <NavBar totalItems={this.state.products.length} />
        <ProductList
          products={this.state.products}
          onDelete={this.removeHandler}
          onIncrement={this.incrementHandler}
          onDecrement={this.decrementHandler}
          onChange={this.onChangeHandler}
        /> */}
      </div>
    );
  }
}

export default App;

// const App = () => {

//   const [products,setProducts] = useState([
//           {title: "React.js" , price: "99$" , discout:"20%",id:1 },
//           {title: "Node.js" , price: "89$" , discout:"15%",id:2 },
//           {title: "JavaScript" , price: "79$" , discout:"10%",id:3 }
//         ]);

//   const clickHandler=()=>{
//     setProducts([
//               {title: "React.js" , price: "79.2$" , discout:"0"},
//               {title: "Node.js" , price: "75.65$" , discout:"0"},
//               {title: "JavaScript" , price: "71.1$" , discout:"0"}
//             ]);
//   }

//   return (
//         <div className="container" id="title">
//             <h1>Shopping App</h1>
//              {products.map((product) =>{
//               return <Product
//                name={product.title}
//                price={product.price}
//                key={product.id}
//                >
//                  <p >Discout is: {product.discout} </p>
//                </Product>
//              })}
//              <button onClick={clickHandler}>Change Price By Discount</button>
//           </div>   );
// }

// export default App;
