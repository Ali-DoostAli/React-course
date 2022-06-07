const Wrapper = (WrapperComponent , className) => {
    return (props) => {
        console.log(props);
        return (
            <div className={className}>
                <WrapperComponent {...props} />
            </div>
     );
    };
};
 
export default Wrapper;




// const Wrapper = (props) => {
//     return ( 
//         <div className={props.class}>
//             {props.children}
//         </div>
//      );
// }
 
// export default Wrapper;