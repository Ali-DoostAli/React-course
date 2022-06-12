import { useReducer } from "react";

const initialState = 0 ;


const reducer = (state, action) => {
    console.log(state, action);
    switch (action.type) {
      case "add":
        return state + action.vlaue ;
      case "decrement":
        return state - action.vlaue ;
        case "reset":
      return initialState;
    default:
      return state;
  }
};



const CounterReducerTwo = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

    return ( 
        <div>
      <div>
        <h2>count one is {count}</h2>
        <button onClick={() => dispatch({ type: "add", vlaue: 1 })}>
          Add One
        </button>
        <button onClick={() => dispatch({ type: "add", vlaue: 5 })}>
          Add Five
        </button>
        <button onClick={() => dispatch({ type: "decrement", vlaue: 1 })}>
          decrement One
        </button>
      </div>
      <div>
        <h2>count two is {countTwo}</h2>
        <button onClick={() => dispatchTwo({ type: "add2", vlaue: 2 })}>
          Add Two
        </button>
        <button onClick={() => dispatchTwo({ type: "add2", vlaue: 10 })}>
          Add Ten
        </button>
        <button onClick={() => dispatchTwo({ type: "decrement2", vlaue: 2 })}>
          decrement Two
        </button>
        <br />
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </div>
     );
}
 
export default CounterReducerTwo;