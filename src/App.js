import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import ProductList from "./components/Product/ProductList";

class App extends React.Component {
  constructor(){
    super()
    console.log('App.js constructor');
  }
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
      this.setState({ products: filteredProducts });
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

  componentDidMount() {
    console.log('App.js componentDidMount');
  };
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  render() {
    console.log('App.js render');
    return (
      <div className="container" id="title">
        <NavBar totalItems={this.state.products.filter((p) => p.quantity > 0).length} />
        <ProductList
          products={this.state.products}
          onDelete={this.removeHandler}
          onIncrement={this.incrementHandler}
          onDecrement={this.decrementHandler}
          onChange={this.onChangeHandler}
        />
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
