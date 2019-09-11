import React, { useState } from "react";



const Item = props =>  {
  const handleClick = (event) => {
    const target = event.currentTarget.data;
    console.log(target)
    console.log('cierrateeeee')
  };
  return(
  <>
    <li   
      className={`ListItem Item${props.isCompleted ? " completed" : ""}`} 
      onClick={() => props.completeItem(props.index)}
    >
      {props.content}
    </li>
    <button data={props.index} onClick = {handleClick}>X</button>
  </>
  )
}

export default Item;