
import React from 'react';
import QuizOption from './QuizOption';

interface Question {
  id: string;
  text: string;
  options: {
    id: string;
    text: string;
  }[];
}

interface QuizSectionProps {
  section: {
    title: string;
    questions: Question[];
  };
  selectedAnswers: Record<string, string>;
  onAnswerSelect: (questionId: string, answerId: string) => void;
}

const QuizSection: React.FC<QuizSectionProps> = ({
  section,
  selectedAnswers,
  onAnswerSelect,
}) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-6">{section.title}</h2>
      
      <div className="space-y-8">
        {section.questions.map((question) => (
          <div key={question.id}>
            <h3 className="text-lg font-medium mb-4">
              {question.text}
            </h3>
            <div>
              {question.options.map((option) => (
                <QuizOption
                  key={option.id}
                  id={option.id}
                  text={option.text}
                  isSelected={selectedAnswers[question.id] === option.id}
                  onSelect={() => onAnswerSelect(question.id, option.id)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizSection;
