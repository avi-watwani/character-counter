import './App.css';
import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');

  const charCount = text.length;
  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;

  return (
    <div className="App">
      <h1>Character & Word Counter</h1>

      <textarea
        value={text}
        style={{ width: '90vw', height: '80vh' }}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste your text here..."
      ></textarea>

      <h2>Characters: {charCount}, Words: {wordCount}</h2>
    </div>
  );
}

export default App;
