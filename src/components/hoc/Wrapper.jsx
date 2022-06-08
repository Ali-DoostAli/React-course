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
