import { useMemo, useState } from "react";
const expensiveCalculation = (count) => {
               return count*count
}

function UseMemo() {
               const [count, setCount] = useState(0);
               const ec= useMemo(() => expensiveCalculation(count), [count]);
               return (
                              <div style={{ textAlign: "center", padding: "20px" }}>
                                         <h1 style={{ fontWeight: "bold" , color : "Blue" }}>UseMemo</h1>
                                         <h2>Count: {count}</h2>
                                         <h2>Calculation: {ec}</h2>
                                         <button onClick={() => setCount(count + 1)}>Increase count</button>
                              </div>
               );
           
}

export default UseMemo;

