import React, { useState } from "react";
import './App.css';

function App() {
  const [items, setItems] = useState([
    {
      content: "📘 Aprender React"
    },
    {
      content: "⚛️ Crear mi primera aplicación"
    },
    {
      content: "🚀 Subirla a GitHub"
    }
  ]);
  return (
    <div className="App">
      <h1>Todo List</h1>
      <ul className="ItemList">
        {items.map((item, index) => (
          <li key={index} className="Item">
            {item.content}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
