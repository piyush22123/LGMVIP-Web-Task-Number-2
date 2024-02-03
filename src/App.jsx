import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    // Corrected the fetch usage
    const response = await fetch("https://reqres.in/api/users?page=1");
    const jsonresponse = await response.json();
    setUsers(jsonresponse.data); // Use jsonresponse.data to get the array of users
  };

  return (
    <>
      <div className='container'>
        <Navbar />
        <button onClick={loadUsers}>Get user data</button>
        <div className="user-data">
          <ul>
            {users.map(({ id, email, first_name, last_name, avatar }) => (
              <div className='user-grid' key={id}>
                <img src={avatar} alt={`${first_name} ${last_name}`} />
                <h3><span>Id:-</span> {id}</h3>
                <h3><span>Name:-</span> {first_name} {last_name}</h3>
                <h3><span>Email:-</span> {email}</h3>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
