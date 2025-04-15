import { Form } from "react-router-dom"
import React, { useState  } from "react"
import './styles.css';

function Forms() {
               const [formData, setFormData] = useState({
                              name: "",
                              email: "",
                              password: "",
                              phone: "",
                              age: ""
               })
               const handleChange = (event) => {
                              const { name, value } = event.target;
                              setFormData ({
                                             ...formData,
                                             [name]: value,
                              });
               }
               const handleSubmit = (event) => {
                              event.preventDefault();
                              console.log(formData);
                              alert("form submitted successfully");
               };
               return (
                              <div style={{ textAlign: "center" }}>
                              <form onSubmit={handleSubmit}>
                                             <input type="text"  name="name" id= "name" placeholder="Enter your name" onChange={handleChange} value={formData.name} />
                                             <input type="email" name="email" id= "email" placeholder="Enter your email" onChange={handleChange} value={formData.email} />
                                             <input type="password" name="password" id= "password" placeholder="Enter your password" onChange={handleChange} value={formData.password} />
                                             <input type="phone" name="phone" id= "phone" placeholder="Enter your phone number " onChange={handleChange} value={formData.phone} />
                                             <input type="age" name="age" id= "age" placeholder="Enter your age" onChange={handleChange} value={formData.age} />
                                             <input type="submit" value="Submit" />
                              </form>
                              </div>
               )
}
export default Forms;


