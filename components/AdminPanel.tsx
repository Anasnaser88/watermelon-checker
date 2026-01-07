
import React from 'react';
import { AdConfig } from '../types';
import { Translations } from '../translations';

interface AdminPanelProps {
  config: AdConfig;
  setConfig: (config: AdConfig) => void;
  onClose: () => void;
  t: Translations;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ config, setConfig, onClose, t }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as any;
    setConfig({
      ...config,
      [name]: type === 'checkbox' ? (e.target as any).checked : value,
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="bg-green-700 p-6 text-white flex justify-between items-center">
          <h2 className="text-xl font-bold">{t.adminTitle}</h2>
          <button onClick={onClose} className="hover:rotate-90 transition-transform">✕</button>
        </div>
        
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Image URL</label>
            <input 
              name="imageUrl"
              type="text" 
              value={config.imageUrl}
              onChange={handleChange}
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>
          
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Text</label>
            <textarea 
              name="text"
              value={config.text}
              onChange={handleChange}
              rows={2}
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>
          
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Link</label>
            <input 
              name="link"
              type="text" 
              value={config.link}
              onChange={handleChange}
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          <button 
            onClick={onClose}
            className="w-full py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-colors"
          >
            {t.save}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
