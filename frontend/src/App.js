import React, { useState, useEffect } from 'react'; 
import axios from "axios"; 
import './App.css'; 
  
function App() { 
    const [first, setFirst] = useState(0);
    const [second, setSecond] = useState(0);
    const [ans, setAns] = useState(0)
  
  
    const add = () => {
      axios.post('http://localhost:5000/api/add', { 
        first, 
        second
      }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(response => {
        setAns(response.data.result);
        setFirst(0);
        setSecond(0);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }
  
  
    const substr = () => {
      axios.post('http://localhost:5000/api/subtract', { 
        first, 
        second
      }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(response => {
        setAns(response.data.result);
        setFirst(0);
        setSecond(0);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }
  
  
    return (
      <div>
        <p>Operands</p>
        <input name="Input 1"
          type="number"
          value={first}
          placeholder="Enter first number"
          onChange={(text) => setFirst(text.target.value)}
        />
        <input name="Input 2"
          type="number"
          value={second}
          placeholder="Enter second number"
          onChange={(text) => setSecond(text.target.value)}
        />
        <button onClick={add}>
          Add
        </button>
        <button onClick={substr}>
          Subtract
        </button>
        <p>Result is {ans}</p>
  
  
      </div>
     
    );
  
} 
export default App; 