import React from 'react'
import '../App.css';
function Alert(props) {
 
  return (
    <div className="alert-container">
      {
        props.alert && 
        <div className={`alert  alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          <span>{props.alert.msg}</span>
        </div>
      }
    </div>
    
    //props.alert && is used when, if initially props.alert is null then it will not return the next expresssion
  )
}

export default Alert
