
import React from 'react';

interface QuizOptionProps {
  id: string;
  text: string;
  isSelected: boolean;
  onSelect: () => void;
}

const QuizOption: React.FC<QuizOptionProps> = ({ id, text, isSelected, onSelect }) => {
  return (
    <div
      onClick={onSelect}
      className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all duration-200 mb-3 ${
        isSelected
          ? 'border-purple-400 bg-purple-50'
          : 'border-neutral-200 hover:border-purple-200 hover:bg-neutral-50'
      }`}
    >
      <div
        className={`h-5 w-5 rounded-full border flex items-center justify-center mr-3 ${
          isSelected ? 'border-purple-400 bg-purple-400' : 'border-neutral-300'
        }`}
      >
        {isSelected && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-3 h-3"
          >
            <path
              fillRule="evenodd"
              d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
      <span className="text-neutral-700">{text}</span>
    </div>
  );
};

export default QuizOption;
