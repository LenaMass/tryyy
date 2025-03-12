
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuizSection from '@/components/quiz/QuizSection';
import QuizResultCard from '@/components/quiz/QuizResultCard';
import { quizData } from '@/components/quiz/quizData';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const QuizPage = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  
  const handleAnswerSelect = (questionId: string, answerId: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answerId,
    }));
  };
  
  const handleNext = () => {
    if (currentSectionIndex < quizData.length - 1) {
      setCurrentSectionIndex(currentSectionIndex + 1);
      window.scrollTo(0, 0);
    } else {
      setShowResults(true);
      window.scrollTo(0, 0);
    }
  };
  
  const handlePrevious = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex(currentSectionIndex - 1);
      window.scrollTo(0, 0);
    }
  };
  
  const isCurrentSectionComplete = () => {
    const currentSection = quizData[currentSectionIndex];
    return currentSection.questions.every(q => selectedAnswers[q.id]);
  };
  
  const calculateResult = () => {
    // Count answers by type
    const answerCounts: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
    
    Object.values(selectedAnswers).forEach(answerId => {
      if (answerId.startsWith('A')) answerCounts.A++;
      if (answerId.startsWith('B')) answerCounts.B++;
      if (answerId.startsWith('C')) answerCounts.C++;
      if (answerId.startsWith('D')) answerCounts.D++;
    });
    
    // Check if this is a regional headquarters case (from q3)
    if (selectedAnswers['q3'] === 'C3') {
      return 'E'; // Regional Headquarters
    }
    
    // Find the most selected answer type
    let mostSelectedType = 'B'; // Default to LLC
    let maxCount = 0;
    
    Object.entries(answerCounts).forEach(([type, count]) => {
      if (count > maxCount) {
        mostSelectedType = type;
        maxCount = count;
      }
    });
    
    return mostSelectedType;
  };
  
  const getRecommendedEntityType = () => {
    const resultType = calculateResult();
    
    switch (resultType) {
      case 'A':
        return {
          type: 'Joint Stock Company (JSC)',
          description: 'Best for large businesses seeking public investment.',
          capitalRequirement: 'Minimum SAR 500,000, with 25% paid at incorporation.',
          governmentFees: {
            saudiGM: 'SAR 17,065',
            nonSaudiGM: 'SAR 29,555 (includes SAR 12,490 for work permit)',
          },
          timeline: {
            saudiGM: '10 days – 4 weeks',
            nonSaudiGM: '1 – 2 months',
          }
        };
      case 'B':
        return {
          type: 'Limited Liability Company (LLC)',
          description: 'Best for most foreign investors, allowing 100% ownership with a MISA license.',
          capitalRequirement: 'No fixed minimum (varies by industry).',
          governmentFees: {
            saudiGM: 'SAR 17,065',
            nonSaudiGM: 'SAR 29,555',
          },
          timeline: {
            saudiGM: '10 days – 4 weeks',
            nonSaudiGM: '1 – 2 months',
          }
        };
      case 'C':
        return {
          type: 'Single-Owner LLC (Individual LLC)',
          description: 'Best for a single foreign investor wanting a structured entity.',
          capitalRequirement: 'Minimum SAR 100,000.',
          governmentFees: {
            saudiGM: 'SAR 17,065',
            nonSaudiGM: 'SAR 29,555',
          },
          timeline: {
            saudiGM: '10 days – 4 weeks',
            nonSaudiGM: '1 – 2 months',
          }
        };
      case 'D':
        return {
          type: 'Foreign Branch',
          description: 'Best for companies expanding into Saudi Arabia without creating a separate legal entity.',
          capitalRequirement: 'No minimum capital required, but parent company must provide financial guarantees.',
          governmentFees: {
            saudiGM: 'SAR 17,065',
            nonSaudiGM: 'SAR 29,555',
          },
          timeline: {
            saudiGM: '10 days – 4 weeks',
            nonSaudiGM: '1 – 2 months',
          }
        };
      case 'E':
        return {
          type: 'Regional Headquarters (RHQ) Entity',
          description: 'Best for multinational corporations managing operations in the Middle East.',
          capitalRequirement: 'No minimum capital, but financial stability required.',
          governmentFees: {
            saudiGM: 'SAR 17,065',
            nonSaudiGM: 'SAR 29,555',
          },
          timeline: {
            saudiGM: '10 days – 4 weeks',
            nonSaudiGM: '1 – 2 months',
          }
        };
      default:
        return {
          type: 'Limited Liability Company (LLC)',
          description: 'Best for most foreign investors, allowing 100% ownership with a MISA license.',
          capitalRequirement: 'No fixed minimum (varies by industry).',
          governmentFees: {
            saudiGM: 'SAR 17,065',
            nonSaudiGM: 'SAR 29,555',
          },
          timeline: {
            saudiGM: '10 days – 4 weeks',
            nonSaudiGM: '1 – 2 months',
          }
        };
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-20">
        <div className="container-wide">
          {!showResults ? (
            <div className="max-w-3xl mx-auto">
              <div className="mb-8 text-center">
                <h1 className="heading-md mb-4">Find the Right Legal Entity in Saudi Arabia</h1>
                <p className="text-lg text-neutral-600">
                  Answer the following questions to discover the best legal structure for your business in Saudi Arabia, along with estimated costs and setup timelines.
                </p>
              </div>
              
              <div className="mb-6">
                <div className="bg-neutral-100 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-purple-300 h-2 rounded-full transition-all duration-300" 
                    style={{ width: `${((currentSectionIndex + 1) / quizData.length) * 100}%` }}
                  ></div>
                </div>
                <div className="text-sm text-neutral-500 mt-2">
                  Section {currentSectionIndex + 1} of {quizData.length}
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl border border-neutral-200 shadow-sm">
                <QuizSection 
                  section={quizData[currentSectionIndex]} 
                  selectedAnswers={selectedAnswers}
                  onAnswerSelect={handleAnswerSelect}
                />
                
                <div className="flex justify-between mt-8 pt-6 border-t border-neutral-200">
                  <button
                    onClick={handlePrevious}
                    disabled={currentSectionIndex === 0}
                    className={`flex items-center ${currentSectionIndex === 0 ? 'text-neutral-400 cursor-not-allowed' : 'text-purple-500 hover:text-purple-600'}`}
                  >
                    <ArrowLeft size={16} className="mr-2" />
                    Previous
                  </button>
                  
                  <button
                    onClick={handleNext}
                    disabled={!isCurrentSectionComplete()}
                    className={`flex items-center px-6 py-2 rounded-lg ${isCurrentSectionComplete() ? 'bg-purple-300 text-white hover:bg-purple-400' : 'bg-neutral-200 text-neutral-400 cursor-not-allowed'}`}
                  >
                    {currentSectionIndex < quizData.length - 1 ? 'Next' : 'See Results'}
                    <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto">
              <div className="mb-12 text-center">
                <h1 className="heading-md mb-4">Your Results: Best Legal Entity, Cost & Timeline</h1>
                <p className="text-lg text-neutral-600">
                  Based on your answers, we recommend the following legal structure for your business in Saudi Arabia.
                </p>
              </div>
              
              <QuizResultCard result={getRecommendedEntityType()} />
              
              <div className="mt-12 text-center">
                <h2 className="text-2xl font-bold mb-6">What's Next?</h2>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link 
                    to="/services" 
                    className="button-primary inline-flex items-center justify-center"
                  >
                    Explore Our Services
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                  
                  <Link 
                    to="/" 
                    className="button-secondary inline-flex items-center justify-center"
                  >
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default QuizPage;
