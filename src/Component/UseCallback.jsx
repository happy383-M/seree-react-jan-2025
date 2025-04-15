import React, { useCallback, useState } from "react";
import NewButton from "./NewButton";

function UseCallback() {
               console.log('Callback called');
               const [count, setCount] = useState(0);
               const [click, setClick] = useState(0);
               const increment = useCallback(() => {
                              setClick(click + 1);
               }, [click]);

  return (
           <div style={{ textAlign: "center", padding: "20px" }}>
               <>
                   <p>Count :{count}</p>
                   <p>Click :{click}</p>
                   <button onClick={() => setCount(count + 1)}>Increment </button>
                   <NewButton text={'click me '} handleClick={increment}/>
               </>
           </div>
  )
}
export default UseCallback;