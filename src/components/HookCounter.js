import { useState } from "react";

const HookCounter = () => {
  const [count, setCount] = useState(0);

  const addOneHandler = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const addTwoHandler = () => {
    setCount((prevCount) => prevCount + 2);
  };

  const addFiveHandler = () => {
    setCount((prevCount) => prevCount + 5);
  };

  return (
    <div>
      <h2>count = {count}</h2>
      <button onClick={addOneHandler}>Add One</button>
      <button onClick={addTwoHandler}>Add Two</button>
      <button onClick={addFiveHandler}>Add Five</button>
    </div>
  );
};

export default HookCounter;
