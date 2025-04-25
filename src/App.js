import './App.css';
import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');

  const charCount = text.length;
  const words = text.trim().split(/\s+/);
  const wordCount = text.trim() === '' ? 0 : words.length;
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
      <h1>Character & Word Counter</h1>

      <textarea
        placeholder='Type or paste your text here...'
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          flex: 1,
          resize: 'none',
          fontSize: '1.2rem',
          width: '90%',
          boxSizing: 'border-box',
        }}
      ></textarea>

      <h1>Characters: {charCount}, Words: {wordCount}</h1>
      <br />
      <br />
    </div>
  );
}

export default App;
