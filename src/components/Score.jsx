import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { ReactComponent as Sad} from '../Assets/sad.svg';

const Score = () => {
  const { state } = useLocation();
//   console.log('state', state);

  const navigate = useNavigate();
  const { score, total, unanswered,fullName } = state || { score: 0, total: 0, unanswered: 0 };

  const wrongAnswers = total - score - unanswered;

  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;

  console.log('===> In Score',fullName,state);
  

  return (
    <div className="w-full min-h-full">
      <Navbar     
       fullName={fullName}   
       type="score" />

      <div className="flex flex-col items-center mt-10 gap-6 text-[#373052]">
      {percentage > 50 ? (  <div className="w-24 h-24 bg-[#06AF521A] text-[#06AF52] rounded-full text-5xl flex justify-center items-center">
          ✓
        </div>) : ( <Sad />)}
      
       
        <div className="flex flex-col items-center -space-y-4">
          <span className="text-[26px] sm:text-[40px] mb-6 uppercase font-light tracking-[8px]">
          {percentage >= 75 ? 'Congratulation' : 'Keep Practicing!'}
          </span>
          <span className="sm:text-[20px]">
          {percentage > 50 ? 'You successfully completed the Quiz and holds' : ' You successfully completed the Quiz but you need to '}
          </span>
        </div>

        <div className="flex flex-col gap-3 items-center -space-y-3 mt-12">
          <span className="text-[32px]">Your Score</span>
          <span className={`text-[56px] font-bold ${percentage > 50 ? 'text-[#06AF52]' : 'text-[#AF9B06] '} `}>
            {percentage}%
          </span>
          <span className="text-[40px]">
            {percentage >= 80 ? 'Great Job!' : percentage >= 50 ? 'Good Effort!' : 'Keep Practicing!'}
          </span>
        </div>

        <div className="w-[90%] sm:w-[443px] border border-[#D9D9D9] py-8 rounded-lg flex flex-col items-center">
          <p className="text-2xl mb-4 font-medium">Out of {total} questions.</p>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-lg text-[#06AF52] font-medium">{score}</span>
              <span className="text-lg">Correct</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg text-[#AF0606] font-medium">{wrongAnswers}</span>
              <span className="text-lg">Incorrect</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg text-[#8D8D8D] font-medium">{unanswered}</span>
              <span className="text-lg">Not answered</span>
            </div>
          </div>
        </div>

        <button
          onClick={() => navigate('/')}
          className="border border-[#B92B5D] text-[#B92B5D] text-[20px] px-12 py-2 rounded-lg hover:bg-[#B92B5D] hover:text-white transition-all duration-200 ease-in-out"
        >
          Retake Quiz
        </button>
      </div>
    </div>
  );
};

export default Score;
