import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import data from '../questions.json';
import Navbar from './Navbar';

const Quiz = () => {
  const { categoryId } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  const category = data.categories.find((cat) => cat.id === categoryId);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timer, setTimer] = useState(category.questions[0].timeLimit);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(0); 
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const currentQuestion = category.questions[currentQuestionIndex];
  const totalQuestions = category.questions.length;

  useEffect(() => {
    if (timer === 0) {
      handleNext();
    }
    const countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
    return () => clearInterval(countdown);
  }, [timer]);

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    setAnswered((prev) => prev + 1); 
    if (answer === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setTimer(category.questions[currentQuestionIndex + 1].timeLimit);
      setSelectedAnswer(null); 
    } else {
      handleFinishQuiz();
    }
  };

  const handleFinishQuiz = () => {
    const unanswered = totalQuestions - answered; 
    navigate('/score', {
      state: { score, total: totalQuestions, unanswered ,fullName : state?.fullName},
    });
  };

  console.log('timer ====> in Quiz',timer,typeof(timer),state?.fullName);
  

  return (
    <div className='w-full min-h-full'>

      <Navbar
        fullName={state?.fullName}
        state={{
          score,
          total: totalQuestions,
          unanswered: totalQuestions - answered,
          fullName : state?.fullName

        }}
        type="quiz"
      />
          <div className="flex flex-col items-center pt-[36px] sm:pt-[55px] min-h-[calc(100%-80px)] text-[#373052] ">

      {/* <h2 className="text-xl font-bold mb-4">{category.name}</h2> */}

      <div className="w-full px-4 sm:w-[90%] lg:max-w-[70%] mb-4">
        <div className='flex items-center justify-between'>
        <div className="flex items-center mb-2">
          <span className="text-[32px] text-[#B92B5D]">{currentQuestionIndex + 1} &nbsp;</span>
          <span className="text-2xl"> / {totalQuestions}</span>
        </div>
        <span className={`px-6 py-3 rounded-lg bg-[#D9D9D94D] font-medium text-xl lg:text-2xl ${timer < 5 && 'text-[#B92B5D]' }`}>00: {timer < 10 ? `0${timer}`: `${timer}` } </span>
        </div>

        <div className="w-full bg-[#E9E8E3] h-2 mt-5">
          <div
            className="bg-[#B92B5D] h-2 "
            style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
          ></div>
        </div>
      </div>

        <div className='w-[90%] sm:w-[75%] lg:w-[60%] text-xl sm:text-2xl flex items-start mt-[60px]'>
            <div className='w-[5%]  '>{currentQuestionIndex + 1}.</div>
      <div className="w-full sm:max-w-[95%]  ">
        <h3 className="mb-6 ">{currentQuestion.question}</h3>
        <div className="space-y-5">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option[0])} 
              className={`w-full px-4 py-2 flex items-center gap-3 rounded-lg border text-xl border-[#D9D9D9] min-h-[91px] h-full ${
                selectedAnswer
                  ? option[0] === selectedAnswer
                    ? option[0] === currentQuestion.correctAnswer
                      ? 'border-green-500  border-[2px] '
                      : 'border-[#B92B5D] border-[2px] '
                    : '' 
                  : '' 
              }`}
              disabled={!!selectedAnswer} 
            >
                 <span className={` h-6 w-6 border border-[#C2C2C2] font-normal flex mt- justify-center  rounded-full ${
                   selectedAnswer
                   ? option[0] === selectedAnswer
                     ? option[0] === currentQuestion.correctAnswer
                       ? 'bg-green-500 text-white'
                       : 'bg-[#B92B5D] text-white'
                     : '' 
                   : '' }`}>{
                    selectedAnswer
                    ? option[0] === selectedAnswer
                      ? option[0] === currentQuestion.correctAnswer
                        ? '✓'
                        : '˟'
                      : '' 
                    : '' } </span>
              {option}
            </button>
          ))}
        </div>
        <div className="mt-10 flex justify-between items-center ">
          {/* <span>Time Left: {timer}s</span> */}
          <button
            onClick={handleNext}
            className="px-12 py-2 text-xl bg-[#B92B5D] text-white rounded-md "
          >
            Next
          </button>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
};

export default Quiz;
