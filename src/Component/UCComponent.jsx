import { useRef } from 'react';
import "./styles.css";

function UCComponent() {
               const nameRef = useRef();
               const ageRef = useRef();
               const phoneRef = useRef();
               const emailRef = useRef();
               const passwordRef = useRef();

               const show = () => {
                              console.log(nameRef.current.value);
                              console.log(ageRef.current.value);
                              console.log(phoneRef.current.value);
                              console.log(emailRef.current.value);
                              console.log(passwordRef.current.value);
                              alert(
                                             ` ${nameRef.current.value}-${ageRef.current.value}-${phoneRef.current.value}-${emailRef.current.value}-${passwordRef.current.value}`
                              );
                              nameRef.current.value = null;
                              ageRef.current.value = null;
                              phoneRef.current.value =null;
                              emailRef.current.value = null;
                              passwordRef.current.value = null;
               };
               return (
                              <div className="container">
                                             <h1>UC Component</h1>
                                             <input type="text" placeholder="Name" ref={nameRef} />
                                             <input type="text" placeholder="Age" ref={ageRef} />
                                             <input type="text" placeholder="Phone" ref={phoneRef} />
                                             <input type="text" placeholder="Email" ref={emailRef} />
                                             <input type="password" placeholder="Password" ref={passwordRef} />
                                             <br />
                                             <button onClick={show}>Submit</button>
                              </div>
               );
}
export default UCComponent;


