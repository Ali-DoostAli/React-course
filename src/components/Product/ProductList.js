import { useProducts, useProductsActions } from "../Provider/ProductProvider";
import Product from "./Product";

const ProductList = () => {
  const products = useProducts();
  const dispatch = useProductsActions();

  const renderProduct = () => {
    if (products.length === 0) return <div>there is no product in cart </div>;

    return products.map((product, index) => {
      return (
        <Product
          product={product}
          key={index}
          onDelete={() => dispatch({ type: "remove", id: product.id })}
          onIncrement={() => dispatch({ type: "increment", id: product.id })}
          onDecrement={() => dispatch({ type: "decrement", id: product.id })}
          onChange={(e) => dispatch({ type: "edit", id: product.id, event: e })}
        />
      );
    });
  };

  return (
    <div>
      {!products.length && <div>go to shopping</div>}
      {renderProduct()}
    </div>
  );
};

export default ProductList;
