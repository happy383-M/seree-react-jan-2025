import React from 'react';
import './styles.css';

function Properties(props){
    console.log(props);
    return(
        <>
        <h4>My name is {props.name}</h4>
        <h4>I am {props.age}yrs old</h4>
        </>
    )
}
export default Properties;

