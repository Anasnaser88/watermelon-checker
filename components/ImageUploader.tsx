
import React, { useRef } from 'react';
import { Translations } from '../translations';

interface ImageUploaderProps {
  onImageSelect: (base64: string) => void;
  disabled: boolean;
  t: Translations;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageSelect, disabled, t }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = (reader.result as string).split(',')[1];
        onImageSelect(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg border-2 border-dashed border-green-200 text-center">
      <div className="mb-4 flex justify-center">
        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-4xl text-green-500">
          📸
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{t.uploaderTitle}</h3>
      <p className="text-gray-500 mb-6 text-sm">{t.uploaderDesc}</p>
      
      <div className="flex flex-col gap-3">
        <button
          onClick={triggerUpload}
          disabled={disabled}
          className="w-full py-4 px-6 bg-green-500 hover:bg-green-600 disabled:bg-gray-300 text-white font-bold rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 text-lg android-btn-active"
        >
          <span>📷</span>
          <span>{t.uploadBtn}</span>
        </button>
        <input
          type="file"
          accept="image/*"
          capture="environment"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default ImageUploader;
