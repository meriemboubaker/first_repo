import React from 'react';
import PropTypes from "prop-types";
const Bio  = props =>{
    const { name = "user",lastname ="unknown",biography="empty",profession="unknown"} = props;
    
    const handleClick = e => {
      e.preventDefault();
      alert('hi '+name+" "+lastname);
      
    };
    console.log(`props:`,props)
   
    return (
      <>
      
  
    
        {props.children}
       <h1> {name} {lastname} </h1>
       <h1 style={{color:'grey'}}>profession: {profession} </h1>
       <h1 style={{color:'black',fontFamily:"cursive"}}> Biography: {biography} </h1>
       <button href="/" onClick={handleClick}>
        Click me
      </button>
      
       </>
     )
    }
   Bio.propTypes = {
      name: PropTypes.string,
      lastname: PropTypes.string,
      profession: PropTypes.string,
      biography: PropTypes.string
    };
    
    export default Bio
 
   
        
        