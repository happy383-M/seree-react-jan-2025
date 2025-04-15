import React, { useState } from 'react';
import "./styles.css";

function HandleState() {
               const [count,setCount] = useState (0);
               return(
               <div>
                              <p style={{textAlign: "center"}}>Count: {count}</p>
                              <button onClick={() => setCount(count + 1)} style={{marginLeft: '37%'}}>Increment</button>
                              <button onClick={() => setCount(count - 1)} style={{marginLeft: '5%'}}>Decrement</button>
               </div>


               )  
}
export default HandleState;

