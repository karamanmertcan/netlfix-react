import React, { useState } from 'react';

const Questions = ({ question, info }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col  h-auto bg-black  ">
      <div className="flex flex-col justify-center items-center mt-10  ">
        <div
          className={`flex flex-col w-2/4  ${
            isOpen ? 'h-auto' : 'h-20'
          } bg-gray-800`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex flex-row justify-between items-center my-auto  ">
            <span className="ml-10 lg:text-3xl sm:text-2xl text-white font-black ">
              {question}
            </span>
            <span
              className={`transition-all duration-500 ease-in-out ${
                isOpen ? ' transform -rotate-45' : ''
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-white mr-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </span>
          </div>
          {isOpen && (
            <div className="flex justify-center items-center px-10 border-t-2 border-white">
              <span className="text-white text-3xl font-bold mt-5">{info}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Questions;
