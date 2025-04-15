import {memo} from 'react';
function NewButton ({text, handleClick}){
               console.log('newbutton called');
               return (
                              <div style={{ textAlign: "center", padding: "20px" }}>
                                         <button onClick={handleClick}>{text}</button>
                              </div>
               )


}
export default memo(NewButton);