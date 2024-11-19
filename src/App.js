import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CategorySelection from './components/CategorySelection';
import Quiz from './components/Quiz';
import Score from './components/Score';

const App = () => {
  return (
    <div className='w-screen min-h-screen bg-[#F3F3E9] pb-10'>
      
      <Routes>
        <Route path="/" element={<CategorySelection />} />
        <Route path="/quiz/:categoryId" element={<Quiz />} />
        <Route path="/score" element={<Score />} />
      </Routes>
    </div>
  );
};

export default App;
