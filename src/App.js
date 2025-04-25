import './App.css';
import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');

  const charCount = text.length;
  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const sentenceCount = text.split(/[.!?]+/).filter(Boolean).length;
  const paragraphCount = text.split(/\n+/).filter(Boolean).length;
  const spaceCount = (text.match(/\s/g) || []).length;

  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Heading Section */}
      <header style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1>Online Character Counter</h1>
      </header>

      {/* Text Area Section */}
      <main style={{ flex: '6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type or paste your text here..."
          style={{ width: '90%', height: '90%', resize: 'none', padding: '10px', fontSize: '16px' }}
        ></textarea>
      </main>

      {/* Counters Section */}
      <footer style={{ flex: '1', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '20px', padding: '10px' }}>
        <p>Characters: <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>{charCount}</span></p>
        <p>Words: <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>{wordCount}</span></p>
        <p>Sentences: <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>{sentenceCount}</span></p>
        <p>Paragraphs: <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>{paragraphCount}</span></p>
        <p>Spaces: <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>{spaceCount}</span></p>
      </footer>
    </div>
  );
}

export default App;
