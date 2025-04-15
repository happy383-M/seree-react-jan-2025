import React, { useContext } from 'react';
 
const ThemedContext = React.createContext('blue');
const myThemeContext = React.createContext('red');
function UseContext() {       
               const theme= useContext(ThemedContext);
               const myTheme= useContext(myThemeContext);
               return (
                              <div style={{backgroundColor: theme, color: myTheme, textAlign: "center", padding: "20px"}}>
                              <button style ={{backgroundColor: theme, color: myTheme, padding: "10px 20px", borderRadius: "5px"}}>Click Me</button>
                               </div>
               )
}
               export default UseContext;
