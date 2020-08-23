import React, { useState, useEffect } from 'react';

function Shop() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetchItems();
  }, []);
  const fetchItems = async ()=>{
  const data = await fetch('https://jsonplaceholder.typicode.com/users')
   const items = await data.json();
   setUsers(items);
  }
  return (
    <div className="App">
      {
        users.map(user=>(
          <div key={user.id}>
            <h2>Name:{user.name}</h2>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <br/>
          </div>
        ))
      }
    </div>
  );
}
export default Shop;