import React, { useState } from 'react';
import axios from 'axios';

const AddFriends = () => {
  const [form, setForm] = useState({
    name: '',
    age: '',
    email: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    
    axios.post('http://localhost:9000/api/friends', form, {
      headers: {
        authicator: token
      }
    })
    .then(resp => {
      console.log(resp);
    })
    .catch(err => {
      console.log(err);
    });
  };

  return (
    <div>
      <h2>Add Friends</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input onChange={handleChange} name="name" id="username" />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input onChange={handleChange} name="age" id="age" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input onChange={handleChange} name="email" id="email" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddFriends;
