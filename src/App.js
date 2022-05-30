import React, { useState } from 'react';
import Product from "./components/Product/Product";
import "./App.css"



const App = () => {

  const [products,setProducts] = useState([
          {title: "React.js" , price: "99$" , discout:"20%",id:1 },
          {title: "Node.js" , price: "89$" , discout:"15%",id:2 },
          {title: "JavaScript" , price: "79$" , discout:"10%",id:3 }
        ]);

  const clickHandler=()=>{
    setProducts([
              {title: "React.js" , price: "79.2$" , discout:"0"},
              {title: "Node.js" , price: "75.65$" , discout:"0"},
              {title: "JavaScript" , price: "71.1$" , discout:"0"}
            ]);
  }      

  return ( 
        <div className="container" id="title">
            <h1>Shopping App</h1>
             {products.map((product) =>{
              return <Product
               name={product.title}
               price={product.price}
               key={product.id}
               >
                 <p >Discout is: {product.discout} </p>
               </Product>
             })}
             <button onClick={clickHandler}>Change Price By Discount</button>
          </div>   );
}
 
export default App;

// class App extends React.Component {
//   state = { 
//     products: [
//       {title: "React.js" , price: "99$" , discout:"20%" },
//       {title: "Node.js" , price: "89$" , discout:"15%"},
//       {title: "JavaScript" , price: "79$" , discout:"10%"}
//     ]
//    };
//    clickHandler=()=>{
//      this.setState({
//       products: [
//         {title: "React.js" , price: "79.2$" , discout:"0"},
//         {title: "Node.js" , price: "75.65$" , discout:"0"},
//         {title: "JavaScript" , price: "71.1$" , discout:"0"}
//       ]
//      });
//    }
//   render() { 
//     return (
//     <div className="container" id="title">
//           <h1>Shopping App</h1>
//            {this.state.products.map((product,index) =>{
//             return <Product
//              name={product.title}
//              price={product.price}
//              >
//                <p >Discout is: {product.discout} </p>
//              </Product>
//            })}
//            <button onClick={this.clickHandler}>Change Price By Discount</button>
//         </div>  
//         );
//   }
// }
 


// export default App;
