import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import data from '../questions.json';
import Navbar from './Navbar';
import QuizRulesModal from './QuizRulesModal'; 

const CategorySelection = () => {
  const [fullName, setFullName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    if (!fullName || !selectedCategory) {
      alert('Please enter your name and select a category.');
      return;
    }
    navigate(`/quiz/${selectedCategory}`, { state: { fullName } });
  };

  return (
    <div className="w-full min-h-full">
      <Navbar  type="category" />
      <div className="flex flex-col items-center pt-[36px] sm:pt-[55px] min-h-[calc(100%-80px)] text-[#373052]">
        <div className="flex items-center text-[32px] sm:text-[42px] lg:text-[64px] gap-4">
          <div className="text-[#2E2E2E] font-medium">Welcome to </div>
          <div className="text-[#B92B5D]">
            <span className="font-thin">QUIZ</span>
            <span className="font-extrabold tracking-tight">Mania</span>
          </div>
        </div>
        <div className="w-full px-4 sm:w-[70%] lg:w-[45%] mt-6 flex flex-col gap-6">
    
          <div className="bg-[#D9D9D94D] flex flex-col gap-2 rounded-lg text-xl text-[#373052] px-4 py-3 font-light">
            <span>Please read all the rules about this quiz before you start.</span>
            <span
              className="text-[#B92B5D] font-normal cursor-pointer "
              onClick={() => setShowModal(true)}
            >
              Quiz rules
            </span>
          </div>

          <div className="flex flex-col gap-4">
            <div>Full name</div>
            <input
              type="text"
              placeholder="Full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="mb-4 px-4 py-2 border placeholder:text-xl focus:shadow-sm rounded w-full h-[56px] border-[#D9D9D9] outline-[#D9D9D9] bg-transparent placeholder:font-normal"
            />
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-lg mb-4">Please select topic to continue</span>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-[2%] space-y-5 sm:space-y-0">
              {data.categories.map((category) => (
                <button
                  key={category.id}
                  className={`px-6 py-3 rounded-lg border border-[#D9D9D9] flex items-center gap-4 w-full sm:w-[48%] ${
                    selectedCategory === category.id ? 'border-[#B92B5D] border-[2px] ' : ''
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <span
                    className={`block h-6 w-6 border border-[#C2C2C2] rounded-full ${
                      selectedCategory === category.id && 'bg-[#B92B5D] text-white'
                    }`}
                  >
                    {selectedCategory === category.id && '✓'}
                  </span>{' '}
                  {category.name}
                </button>
              ))}
            </div>
            <button
              onClick={handleStartQuiz}
              className="mt-6 px-12 py-2 w-max text-white rounded-lg bg-[#B92B5D] disabled:opacity-70"
              disabled={!fullName || !selectedCategory}
            >
              Start Quiz
            </button>
          </div>
        </div>
      </div>

      {showModal && <QuizRulesModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default CategorySelection;
