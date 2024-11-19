import React from 'react';

const QuizRulesModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-[90%] sm:w-[70%] lg:w-[50%] p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-[#373052]">Quiz rules</h2>
          <button
            onClick={onClose}
            className="text-2xl font-bold text-[#373052] hover:text-[#B92B5D] bg-[#E6E6E6] w-8 h-8 rounded-full"
          >
            ×
          </button>
        </div>

        <div className="space-y-6">
          <div className="">
            <div className="font-semibold mb-2 bg-[#F3F3E9] px-4 py-3">10-Second Timer</div>
            <ul className="list-disc ml-5 text-[#373052]">
              <li>Each question comes with a 10-second timer.</li>
              <li>
                If you don’t answer within the time limit, the app will automatically move to
                the next question.
              </li>
            </ul>
          </div>

          <div className="">
            <h3 className="font-semibold mb-2 bg-[#F3F3E9] px-4 py-3">Manual Navigation</h3>
            <ul className="list-disc ml-5 text-[#373052]">
              <li>You can navigate to the next question manually before the timer expires.</li>
              <li>Use the "Next" button to move ahead if you’re ready before the timer runs out.</li>
            </ul>
          </div>

          <div className="">
            <h3 className="font-semibold mb-2 bg-[#F3F3E9] px-4 py-3">Final Score and Performance Message</h3>
            <ul className="list-disc ml-5 text-[#373052]">
              <li>After all questions are answered, your final score will be displayed.</li>
              <li>Based on your performance, you will receive a personalized message:</li>
              <ul className="list-disc ml-5">
                <li>Great job!: If you score <span className='font-semibold'>above 80%.</span></li>
                <li>Well done!: If you score <span className='font-semibold'> between 60% and 80%.</span></li>
                <li>Keep practicing!: If you score  <span className='font-semibold'>below 60%.</span></li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizRulesModal;
