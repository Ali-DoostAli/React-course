import React from 'react';
import Product from "./components/Product/Product";

class App extends React.Component {
  state = { 
    products: [
      {title: "React.js" , price: "99$" , discout:"20%" },
      {title: "Node.js" , price: "89$" , discout:"15%"},
      {title: "JavaScript" , price: "79$" , discout:"10%"}
    ]
   };
   clickHandler=()=>{
     this.setState({
      products: [
        {title: "React.js" , price: "79.2$" , discout:"0"},
        {title: "Node.js" , price: "75.65$" , discout:"0"},
        {title: "JavaScript" , price: "71.1$" , discout:"0"}
      ]
     });
   }
  render() { 
    return (
    <div className="container" id="title">
          <h1>Shopping App</h1>
           {this.state.products.map((product,index) =>{
            return <Product
             name={product.title}
             price={product.price}
             >
               <p >Discout is: {product.discout} </p>
             </Product>
           })}
           <button onClick={this.clickHandler}>Change Price By Discount</button>
        </div>  
        );
  }
}
 
export default App;

// function App() {
//   return (
//     <div className="container" id="title">
//       <h1>Shopping App</h1>
//       <Product name="React.js" price="99$" />
//       <Product name="Node.js" price="89$" />
//       <Product name="JavaScript" price="79$" />
//       <Product>
//         <p>DisCout is 20%</p>
//       </Product>
//     </div>
//   );
// }

// export default App;
