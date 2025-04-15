import {useEffect, useState} from 'react';
import "./styles.css";

function UseEffect(){
               const [click, setClick] = useState(0);
               useEffect(() => {
                              console.log(` You Clicked  for ${click} times`)
                              document.title = `You Clicked  for ${click} times`;
               })
               return (
                              <div style={{ fontSize: "20px", color: "blue", textAlign: "center", marginTop: "20px" }}>
                                             <h1>{click}</h1>
                                             <button onClick={() => setClick(click + 1)}>Click Me</button>
                                             </div>
               );


}
export default UseEffect;