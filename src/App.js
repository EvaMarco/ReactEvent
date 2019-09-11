import React, { useState } from "react";
import './App.css';
import Item from './components/Item'
import Form from './components/Input'

function App() {
  const [items, setItems] = useState([
    {
      content: "📘 Aprender React",
      isCompleted: false
    },
    {
      content: "⚛️ Crear mi primera aplicación",
      isCompleted: false
    },
    {
      content: "🚀 Subirla a GitHub",
      isCompleted: false
    }
  ]);

  const addItem = content => {
    const newItems = [...items];
    newItems.unshift({ content: content, isCompleted: false});
    setItems(newItems);
  };
  const completeItem = (index) => {
    const newItems = [...items];
    newItems[index].isCompleted = !newItems[index].isCompleted;
    setItems(newItems);
  };
  return (
    <div className="App">
      <h1>Todo List</h1>
        <Form addItem = {addItem}/>
      <ul className="ItemList">
        {items.map((item, index) => (
          <Item 
            key={index}  
            index = {index} 
            content={item.content}
            completeItem={completeItem}
            isCompleted={item.isCompleted}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
