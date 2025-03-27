import { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css'

function App() {
  const [item, setItem] = useState({name:"", description:""});

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/items", item);
    setItem({name:"", description:""});
    refreshItems();
  }
  return (
    <>
      <h2>Home page</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Name' value={item.name} onChange={(e) => setItem({ ...item, name: e.target.value })} required />
        <input type="text" placeholder='Despription' value={item.description} onChange={(e) => setItem({ ...item, description: e.target.value })} required />
        <button type='submit'>Add item</button>
      </form>
    </>
  )
}

export default App;