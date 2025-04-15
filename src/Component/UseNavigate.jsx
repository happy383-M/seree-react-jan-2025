import { useNavigate } from "react-router-dom";

function UseNavigate(){
               const navigate = useNavigate();
               let isLoggedin =true ;
               if (isLoggedin){
                              navigate('/');   
               } else {
                              return (
                                             <div>
                              this is UseNavigate component
                              </div>
                              )
               }       



}
export default UseNavigate;