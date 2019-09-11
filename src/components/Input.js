import React, { useState } from "react";

function Form(props) {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
  
    props.addItem(value);
    setValue("");
    return false;
  };
  return (
      <form className = 'ItemForm' onSubmit= {handleSubmit}>
        <label htmlFor="text">Introduce tu siguiente tarea:</label>
        <input 
          value= {value}
          type="text" 
          name="text" 
          id="text"
          onChange={e => setValue(e.target.value)}
        />
      </form>
  );
}
export default Form;