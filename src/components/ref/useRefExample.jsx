import { useEffect, useRef, useState } from "react";

const UseRefExample = () => {
    const inputRef = useRef();
    const previousCount = useRef();
  const previousValue = useRef();
  const [inputValue, setInputValue] = useState("");
  const [count,setCount] = useState(0);
  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };
  console.log('re-render', inputValue);
  console.log('prev-value' , previousValue.current);


  useEffect(()=>{
     previousValue.current = inputValue;
     console.log('useEffect' , previousValue.current);
  },[inputValue]);

  useEffect(()=>{
    previousCount.current = count;
 },[count]);

    const resetHandler = () => {
      setInputValue("");
      inputRef.current.focus();
    };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={changeHandler}
      />
      <button onClick={resetHandler}>Reset</button>
      <p>
          my name is {inputValue} and it used to be {previousValue.current}.
      </p>
      <button onClick={()=> setCount(Math.ceil(Math.random()*100))}>Generate Random </button>
      <p>count is : {count}</p>
      <p>previousCount is {previousCount.current} </p>
    </div>
  );
};

export default UseRefExample;
