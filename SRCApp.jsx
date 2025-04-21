import React, { useState } from 'react';
import './index.css';

function App() {
  const [count, setCount] = useState(0);
  const limit = 10;

  const increase = () => {
    if (count < limit) setCount(prev => prev + 1);
  };

  const decrease = () => {
    if (count > 0) setCount(prev => prev - 1);
  };

  return (
    <main className="container">
      <h1>Click Counter</h1>
      <p className="count-display">Count: {count}</p>

      <div className="buttons">
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
      </div>

      {count === limit && (
        <p className="limit-message">🎉 You've reached the limit!</p>
      )}
    </main>
  );
}

export default App;
