
import React from 'react';
import { AnalysisResult } from '../types';
import { Translations } from '../translations';

interface ResultDisplayProps {
  result: AnalysisResult;
  t: Translations;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result, t }) => {
  const { ripenessPercentage, description, isWatermelon, estimatedQuality } = result;

  const getStars = () => {
    if (ripenessPercentage > 80) return 5;
    return Math.floor(ripenessPercentage / 20);
  };

  const activeStars = getStars();

  return (
    <div className="bg-white p-6 rounded-3xl shadow-xl border border-green-100 mb-8 overflow-hidden relative">
      <div className={`absolute top-0 ${t.summary === 'Summary' ? 'right-0' : 'left-0'} w-32 h-32 bg-green-50 rounded-bl-full -z-0 opacity-50`}></div>
      
      {!isWatermelon && (
        <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 text-yellow-800 rounded-lg text-sm text-center font-medium">
          {t.warningNotWatermelon}
        </div>
      )}

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-green-900">{t.reportTitle}</h3>
          <div className="text-4xl font-black text-green-600">{ripenessPercentage}%</div>
        </div>

        <div className="flex justify-center gap-2 mb-8">
          {[1, 2, 3, 4, 5].map((star) => (
            <span 
              key={star} 
              className={`text-4xl transition-all duration-500 ${star <= activeStars ? 'text-yellow-400 scale-110 drop-shadow-md' : 'text-gray-200 grayscale'}`}
            >
              ★
            </span>
          ))}
        </div>

        <div className="space-y-4">
          <div className="bg-green-50 p-4 rounded-2xl border border-green-100">
            <span className="block text-xs font-bold text-green-600 mb-1">{t.summary}</span>
            <p className="text-gray-800 leading-relaxed font-medium">{description}</p>
          </div>
          
          <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100">
              💎
            </div>
            <div>
              <span className="block text-xs font-bold text-gray-500">{t.estimatedQuality}</span>
              <span className="text-gray-900 font-bold">{estimatedQuality}</span>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center p-4 bg-green-600 text-white rounded-2xl font-bold shadow-lg text-center">
          {ripenessPercentage >= 80 ? t.qualityHigh : 
           ripenessPercentage >= 50 ? t.qualityMid : 
           t.qualityLow}
        </div>
      </div>
    </div>
  );
};

export default ResultDisplay;
