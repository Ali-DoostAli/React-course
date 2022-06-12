import React, { useContext, useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return state + action.vlaue;
    case "decrement":
      return state - action.vlaue;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const CounterContext = React.createContext();
const CounterContextDispatcher = React.createContext();

export const useCount = () => useContext(CounterContext);
export const useCountActions = () => {
  return useContext(CounterContextDispatcher);
  // const addOne = () => {
  //   setCount((prevState) => prevState + 1);
  // };
  // const addFive = () => {
  //   setCount((prevState) => prevState + 5);
  // };
  // const decrement = () => {
  //   setCount((prevState) => prevState - 1);
  // };

  // return { addFive, addOne, decrement };
};

const CounterProvider = ({ children }) => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CounterContext.Provider value={count}>
      <CounterContextDispatcher.Provider value={dispatch}>
        {children}
      </CounterContextDispatcher.Provider>
    </CounterContext.Provider>
  );
};

export default CounterProvider;
