const Wrapper = (WrapperComponent, className) => {
  return (props) => {
    return (
      <div className={className}>
        <WrapperComponent />
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
