
import React from 'react';
import { PredictedFertilizer } from '../types';

interface FertilizerListProps {
  dynamicFertilizers?: PredictedFertilizer[];
}

const defaultFertilizers = [
  { name: "يوريا (Urea)", percentage: 0, reason: "يستخدم لتعزيز النمو الخضري." },
  { name: "سلفات البوتاسيوم", percentage: 0, reason: "أساسي لزيادة السكر والحجم." },
  { name: "نترات الكالسيوم", percentage: 0, reason: "يقوي القشرة الخارجية." },
];

const FertilizerList: React.FC<FertilizerListProps> = ({ dynamicFertilizers }) => {
  const list = dynamicFertilizers || defaultFertilizers;

  return (
    <div className="grid gap-4">
      {list.map((item, index) => (
        <div 
          key={index} 
          className="bg-white p-5 rounded-2xl shadow-sm border border-green-50 flex flex-col gap-3 group hover:border-green-300 transition-all"
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-green-600 font-bold">
                {index + 1}
              </div>
              <h4 className="font-bold text-gray-900">{item.name}</h4>
            </div>
            {item.percentage > 0 && (
              <span className="text-sm font-black text-green-600 bg-green-50 px-3 py-1 rounded-full">
                {item.percentage}%
              </span>
            )}
          </div>

          {item.percentage > 0 && (
            <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-green-500 h-full transition-all duration-1000 ease-out"
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
          )}

          <p className="text-sm text-gray-500 italic">
            <span className="font-bold text-gray-400 ml-1">السبب التقديري:</span>
            {item.reason}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FertilizerList;
