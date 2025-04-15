import { useState } from "react";
import "./styles.css";
function ChangeBGColour(){
             
               const colors = ["red", "blue", "green", "yellow", "purple", "orange", "voilet", "pink", "brown", "black"];
               const [color, setColor] = useState("white");
               return (
                              <div style={{ fontSize: "20px", color: "blue", textAlign: "center", marginTop: "20px", backgroundColor: color }}>
                                        <button style={{ fontSize: "20px", margin: "10px" }} onClick={() => setColor(colors[Math.floor(Math.random() * colors.length)])}>
                                            ChangeColor
                                        </button>                          
                                          </div>   
               )  
}
export default ChangeBGColour;