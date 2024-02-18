import React, { useState } from 'react'; 
import axios from 'axios'; 
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
        setAns(response.data.ans);
        setFirst(0);
        setSecond(0);
      })
      .catch(error => {
        console.error(error);
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
        setAns(response.data.ans);
        setFirst(0);
        setSecond(0);
      })
      .catch(error => {
        console.error(error);
      });
    }
  
  
    return (
      <div
      style={{
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50vh',
        fontSize: 15,
        padding: "100px", 
        fontFamily: "sans-serif"
      }}
      >
        <p>Operands</p>
        <input 
          type="number"
          value={first}
          placeholder="Enter first number"
          onChange={(text) => setFirst(text.target.value)}
        />
        <input 
          type="number"
          value={second}
          placeholder="Enter second number"
          onChange={(text) => setSecond(text.target.value)}
        />
        <button 
          style={{
            backgroundColor: 'darkgreen',
            color: 'white',
          }}
          onClick={add}>
          Add
        </button>
        <button 
          style={{
            backgroundColor: 'darkred',
            color: 'white',
          }}
          onClick={substr}>
          Subtract
        </button>
        <p>Answer: {ans}</p> 
      </div>
     
    );
  
} 
export default App; 