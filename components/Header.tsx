
import React from 'react';
import { Language, translations } from '../translations';

interface HeaderProps {
  onLogoClick: () => void;
  lang: Language;
  setLang: (l: Language) => void;
}

const Header: React.FC<HeaderProps> = ({ onLogoClick, lang, setLang }) => {
  const t = translations[lang];

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: t.title,
          text: t.uploaderTitle,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    }
  };

  const languages: { code: Language; flag: string; label: string }[] = [
    { code: 'ar', flag: '🇮🇶', label: 'عربي' },
    { code: 'en', flag: '🇺🇸', label: 'EN' },
    { code: 'fr', flag: '🇫🇷', label: 'FR' },
    { code: 'de', flag: '🇩🇪', label: 'DE' },
    { code: 'es', flag: '🇪🇸', label: 'ES' },
    { code: 'pt', flag: '🇵🇹', label: 'PT' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b border-green-100">
      <div className="container mx-auto px-4 h-24 flex flex-col justify-center">
        <div className="flex items-center justify-between mb-3">
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={onLogoClick}
          >
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg shadow-green-200 transition-transform active:scale-90">
              🍉
            </div>
            <h1 className="text-xl font-black text-green-700 tracking-tight">{t.title}</h1>
          </div>
          
          <button 
            onClick={handleShare}
            className="p-2 bg-green-50 hover:bg-green-100 rounded-full text-green-600 transition-all active:scale-90"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
          </button>
        </div>

        {/* Language Selector with Flags */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                setLang(l.code);
                localStorage.setItem('app_lang', l.code);
              }}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border transition-all whitespace-nowrap ${
                lang === l.code 
                ? 'bg-green-600 border-green-600 text-white shadow-md scale-105' 
                : 'bg-white border-gray-100 text-gray-600 hover:border-green-300'
              }`}
            >
              <span className="text-xl leading-none">{l.flag}</span>
              <span className="text-[11px] font-bold uppercase">{l.label}</span>
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
