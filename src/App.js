import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleCalculate = () => {
    console.log('handle function')
  };

  return (
    <div className="App">
      <h1>String Calculator</h1>
      <div>
        <label htmlFor="inputString">Enter numbers:</label>
        <input
          type="text"
          id="inputString"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g., 1,2,3"
          style={{ margin: "10px", padding: "5px" }}
        />
      </div>
      <button onClick={handleCalculate} style={{ padding: "5px 10px", cursor: "pointer" }}>
        Calculate
      </button>
      <p style={{ marginTop: "10px", fontWeight: "bold" }}>{result}</p>
    </div>
  );
}

export default App;