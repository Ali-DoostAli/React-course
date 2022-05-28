const Product = (props) => {
    return ( <div>
        <p>product name : {props.name}</p>
        <p>product price : {props.price}</p>
        <p>DisCout  : {props.children}</p>
    </div> );
}
 
export default Product;