import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ fullName, state ,type}) => {
  const navigate = useNavigate();
  const [name,setName] = useState(fullName);

  const handleExitQuiz = () => {
    navigate('/score', { state });
  };

//   console.log('fullname',fullName,name);
  
  return (
    <div className="w-full border-b border-[#D9D9D9] text-white px-6 py-4 flex justify-between items-center h-[80px]">
        <div className='text-[#B92B5D]'>
            <span className='text-3xl font-thin'>QUIZ</span>
            <span className='text-3xl font-extrabold tracking-tight'>Mania</span>

        </div>

        {type === 'score' && <div className="text-lg font-bold text-[#373052] flex items-center gap-2"><span className='flex justify-center items-center h-8 w-8 bg-[#373052] text-white rounded-full'>{fullName?.slice(0,1)}</span> {fullName ? ` ${fullName}` : 'Quiz App'}</div>}
      {type === 'quiz' &&    
        <button
        onClick={handleExitQuiz}
        className=" border border-[#B92B5D] text-[#B92B5D] text-[20px] px-8 sm:px-12 py-2 rounded-lg hover:bg-[#B92B5D] hover:text-white transition-all duration-200 ease-in-out "
      >
        Exit Quiz
      </button>}
 
    </div>
  );
};

export default Navbar;
