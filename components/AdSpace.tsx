
import React from 'react';
import { AdConfig } from '../types';

interface AdSpaceProps {
  config: AdConfig;
}

const AdSpace: React.FC<AdSpaceProps> = ({ config }) => {
  if (!config.isActive) return null;

  return (
    <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden my-6">
      <div className="text-[10px] text-gray-400 px-2 py-1 bg-gray-50 flex justify-between">
        <span>مساحة إعلانية</span>
        <span className="cursor-help">ℹ️</span>
      </div>
      <a href={config.link} target="_blank" rel="noopener noreferrer" className="block relative">
        <img 
          src={config.imageUrl} 
          alt="Ad" 
          className="w-full h-32 object-cover hover:opacity-95 transition-opacity"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
          <p className="text-white text-sm font-bold truncate">{config.text}</p>
        </div>
      </a>
    </div>
  );
};

export default AdSpace;
