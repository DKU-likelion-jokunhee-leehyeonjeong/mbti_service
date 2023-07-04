import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Result from './pages/Result';

function App() {
  const [mbti, setMbti] = useState('');
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home setMbti={setMbti} />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/result" element={<Result mbti={mbti} />} />
      </Routes>
    </div>
  );
}

export default App;
