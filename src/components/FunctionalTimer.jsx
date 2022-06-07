import { useEffect, useState } from "react";

const FunctionalTimer = () => {
    const [count,setCount] = useState(0);
    useEffect(()=>{
       const myTimer = setInterval(()=>{
            console.log('hi ali');
            setCount({count : count+1});
        } , 1000);
        return () => {
            clearInterval(myTimer);
        }
    },[]);
    return ( 
        <div>
                  <p>this is Timer.</p>
        </div>
     );
}
 
export default FunctionalTimer;