
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ResultData {
  type: string;
  description: string;
  capitalRequirement: string;
  governmentFees: {
    saudiGM: string;
    nonSaudiGM: string;
  };
  timeline: {
    saudiGM: string;
    nonSaudiGM: string;
  };
}

interface QuizResultCardProps {
  result: ResultData;
}

const QuizResultCard: React.FC<QuizResultCardProps> = ({ result }) => {
  return (
    <div className="bg-white p-8 rounded-xl border border-neutral-200 shadow-md animate-fade-in">
      <div className="flex items-center mb-6">
        <div className="h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center mr-4">
          <CheckCircle2 size={24} className="text-purple-500" />
        </div>
        <h3 className="text-2xl font-bold">{result.type}</h3>
      </div>
      
      <div className="mb-6">
        <p className="text-lg text-neutral-700">{result.description}</p>
      </div>
      
      <div className="space-y-6">
        <div className="animate-slide-up" style={{ animationDelay: '100ms' }}>
          <h4 className="text-lg font-semibold mb-2">Capital Requirement</h4>
          <p className="text-neutral-700">{result.capitalRequirement}</p>
        </div>
        
        <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
          <h4 className="text-lg font-semibold mb-2">Government Fees</h4>
          <div className="space-y-2">
            <div className="flex items-start">
              <span className="font-medium mr-2">Saudi GM:</span>
              <span className="text-neutral-700">{result.governmentFees.saudiGM}</span>
            </div>
            <div className="flex items-start">
              <span className="font-medium mr-2">Non-Saudi GM:</span>
              <span className="text-neutral-700">{result.governmentFees.nonSaudiGM}</span>
            </div>
          </div>
        </div>
        
        <div className="animate-slide-up" style={{ animationDelay: '300ms' }}>
          <h4 className="text-lg font-semibold mb-2">Timeline</h4>
          <div className="space-y-2">
            <div className="flex items-start">
              <span className="font-medium mr-2">Saudi GM:</span>
              <span className="text-neutral-700">{result.timeline.saudiGM}</span>
            </div>
            <div className="flex items-start">
              <span className="font-medium mr-2">Non-Saudi GM:</span>
              <span className="text-neutral-700">{result.timeline.nonSaudiGM}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 pt-6 border-t border-neutral-200 animate-slide-up" style={{ animationDelay: '400ms' }}>
        <h4 className="text-lg font-semibold mb-4">Summary of Costs & Timelines</h4>
        <div className="bg-neutral-50 p-4 rounded-lg overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left">
              <tr>
                <th className="pb-2">Scenario</th>
                <th className="pb-2">Fixed Fees</th>
                <th className="pb-2">GM Fees (if Non-Saudi)</th>
                <th className="pb-2">Total Cost</th>
                <th className="pb-2">Timeline</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2">Saudi GM</td>
                <td className="py-2">✅ SAR 17,065</td>
                <td className="py-2">❌ Not Applicable</td>
                <td className="py-2 font-medium">SAR 17,065</td>
                <td className="py-2">10 days – 4 weeks</td>
              </tr>
              <tr>
                <td className="py-2">Non-Saudi GM</td>
                <td className="py-2">✅ SAR 17,065</td>
                <td className="py-2">✅ SAR 12,490</td>
                <td className="py-2 font-medium">SAR 29,555</td>
                <td className="py-2">1 – 2 months</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default QuizResultCard;
