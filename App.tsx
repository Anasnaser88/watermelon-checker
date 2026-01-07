
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ImageUploader from './components/ImageUploader';
import ResultDisplay from './components/ResultDisplay';
import AdSpace from './components/AdSpace';
import FertilizerList from './components/FertilizerList';
import AdminPanel from './components/AdminPanel';
import { AnalysisResult, AdConfig } from './types';
import { analyzeWatermelon } from './geminiService';
import { translations, Language } from './translations';

const App: React.FC = () => {
  // Load saved language or default to Arabic
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('app_lang') as Language;
    return (saved && translations[saved]) ? saved : 'ar';
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallBtn, setShowInstallBtn] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const [adConfig, setAdConfig] = useState<AdConfig>({
    imageUrl: 'https://picsum.photos/800/200?random=1',
    link: 'https://example.com',
    text: 'أفضل العروض على المنتجات الزراعية!',
    isActive: true
  });
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallBtn(true);
    });
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setShowInstallBtn(false);
    }
    setDeferredPrompt(null);
  };

  const handleImageSelect = async (base64: string) => {
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const analysis = await analyzeWatermelon(base64, lang);
      setResult(analysis);
    } catch (err: any) {
      setError(err.message || 'Error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col pb-10 bg-[#f7fcf9]">
      <Header 
        lang={lang} 
        setLang={setLang} 
        onLogoClick={() => setIsAdminOpen(!isAdminOpen)} 
      />
      
      <main className="flex-grow container mx-auto px-4 py-6 max-w-2xl">
        {showInstallBtn && (
          <div className="mb-6 p-4 bg-green-600 text-white rounded-2xl shadow-lg flex items-center justify-between animate-bounce">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🤖</span>
              <div>
                <p className="font-bold text-sm">{lang === 'ar' ? 'ثبت التطبيق' : 'Install App'}</p>
              </div>
            </div>
            <button 
              onClick={handleInstallClick}
              className="bg-white text-green-700 px-4 py-2 rounded-xl font-bold text-sm shadow-sm"
            >
              {lang === 'ar' ? 'تثبيت' : 'Install'}
            </button>
          </div>
        )}

        <section className="mb-8">
          <ImageUploader 
            t={t} 
            onImageSelect={handleImageSelect} 
            disabled={loading} 
          />
        </section>

        {loading && (
          <div className="flex flex-col items-center justify-center p-10 bg-white rounded-3xl shadow-sm border border-green-100 mb-8 animate-pulse text-center">
            <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-green-800 font-bold">{t.loading}</p>
          </div>
        )}

        {error && (
          <div className="p-4 mb-8 bg-red-50 border border-red-200 text-red-700 rounded-xl text-center">
            {error}
          </div>
        )}

        {result && (
          <>
            <ResultDisplay result={result} t={t} />
            
            <section className="mt-8">
              <div className="flex items-center justify-between mb-4 px-2">
                <h2 className="text-xl font-bold text-green-900">{t.predictedFertilizers}</h2>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-md">{t.predictedFertilizersDesc}</span>
              </div>
              <FertilizerList dynamicFertilizers={result.predictedFertilizers} />
            </section>
          </>
        )}

        <AdSpace config={adConfig} />

        {!result && !loading && (
          <section className="mt-8 opacity-50 grayscale">
            <h2 className="text-xl font-bold text-green-900 mb-4 px-2">{t.generalFertilizers}</h2>
            <FertilizerList />
          </section>
        )}

        <section className="mt-12 p-6 bg-white rounded-3xl border border-green-50 shadow-sm relative overflow-hidden">
          <div className={`absolute top-0 ${lang === 'ar' ? 'right-0' : 'left-0'} w-1 bg-green-500 h-full`}></div>
          <h3 className="text-lg font-bold text-green-800 mb-4">{t.contactTitle}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a 
              href="https://wa.me/963933614980" 
              className="flex items-center gap-3 p-3 bg-green-50 rounded-xl hover:bg-green-100 transition-colors group"
            >
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-xl">💬</div>
              <div>
                <span className="block text-[10px] font-bold text-green-600 uppercase tracking-wider">WhatsApp</span>
                <span className="text-gray-800 font-medium group-hover:text-green-700 text-sm">00963933614980</span>
              </div>
            </a>
            <a 
              href="mailto:anasthearchi88@gmail.com" 
              className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
            >
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-xl">✉️</div>
              <div>
                <span className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider">Gmail</span>
                <span className="text-gray-800 font-medium group-hover:text-green-700 text-sm">anasthearchi88@gmail.com</span>
              </div>
            </a>
          </div>
        </section>
      </main>

      {isAdminOpen && (
        <AdminPanel 
          config={adConfig} 
          setConfig={setAdConfig} 
          onClose={() => setIsAdminOpen(false)} 
          t={t}
        />
      )}

      <footer className="mt-auto py-10 px-4 text-center">
        <div className="inline-block p-4 bg-white/50 rounded-2xl border border-green-100 backdrop-blur-sm">
          <div className="text-green-800 font-bold text-lg mb-1">{t.designedBy}</div>
          <div className="text-green-600 font-black text-xl mb-3">Anas Mahmod Naser</div>
          <div className="text-gray-400 text-[10px] font-medium tracking-widest uppercase">
            &copy; {new Date().getFullYear()} {t.title}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
