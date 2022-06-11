import React, { useState, useContext } from "react";

const CounterContext = React.createContext();
const CounterContextDispatcher = React.createContext();
export const useCount = () => useContext(CounterContext);
export const useCountActions = () =>{ 
    const setCount = useContext(CounterContextDispatcher);
    const addOne=()=>{
        setCount((prevState ) => prevState + 1);
    }
    const addFive=()=>{
        setCount((prevState ) => prevState + 5);
    }
    const decrement=()=>{
        setCount((prevState) => prevState - 1)
    }
return {addFive,addOne,decrement}
}

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <CounterContext.Provider value={count}>
      <CounterContextDispatcher.Provider value={setCount}>
        {children}
      </CounterContextDispatcher.Provider>
    </CounterContext.Provider>
  );
};

export default CounterProvider;
