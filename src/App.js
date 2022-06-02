import React, { useState } from "react";
import "./App.css";
import ProductList from "./components/Product/ProductList";

class App extends React.Component {
  state = {};

  render() {
    return (
      <div className="container" id="title">
        <h1>Shopping App</h1>
        <ProductList />
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
