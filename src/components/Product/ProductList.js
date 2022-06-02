import React, { Component } from 'react';
import Product from './Product';

class ProductList extends Component {
    state = { 
        products: [
            { title: "React.js", price: "99$", discout: "20%" },
            { title: "Node.js", price: "89$", discout: "15%" },
            { title: "JavaScript", price: "79$", discout: "10%" },
          ],
     } 
    render() { 
        return (
            <div>
                {this.state.products.map((product, index) => {
          return (
            <Product
              name={product.title}
              price={product.price}
              key={index}
              click={() =>this.clickHandler("new title")}
            />
          );
        })}
            </div>
        );
    }
}
 
export default ProductList;