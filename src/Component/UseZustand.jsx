import ZustandLib from "./ZustandLib";
function Zustanad()
{
               const {count, increase, decrease, reset} = ZustandLib();
               return (
               <div style={{textAlign: "center"}}>
               <p>count : {count}</p>
               <button onClick={increase}>Increase</button> <br /> <br/>
               <button onClick={decrease}>Decrease</button><br/><br/>
               <button onClick={reset}>Reset</button>
               </div>
               )

}
export default Zustanad;

