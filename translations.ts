
export type Language = 'ar' | 'en' | 'fr' | 'de' | 'es' | 'pt';

export interface Translations {
  title: string;
  uploaderTitle: string;
  uploaderDesc: string;
  uploadBtn: string;
  loading: string;
  reportTitle: string;
  summary: string;
  estimatedQuality: string;
  qualityHigh: string;
  qualityMid: string;
  qualityLow: string;
  predictedFertilizers: string;
  predictedFertilizersDesc: string;
  generalFertilizers: string;
  contactTitle: string;
  designedBy: string;
  adminTitle: string;
  save: string;
  warningNotWatermelon: string;
}

export const translations: Record<Language, Translations> = {
  ar: {
    title: "بطيختي",
    uploaderTitle: "كيف هي بطيختك اليوم؟",
    uploaderDesc: "قم بتصوير البطيخة أو ارفع صورتها لنخبرك بمدى نضجها",
    uploadBtn: "التقط صورة أو ارفع ملف",
    loading: "جاري تحليل البطيخة وتوقع الأسمدة...",
    reportTitle: "تقرير الفحص",
    summary: "الخلاصة",
    estimatedQuality: "الجودة المقدرة",
    qualityHigh: "😍 بطيخة سكر! اشتريها وأنت مغمض",
    qualityMid: "🤔 مقبولة، قد تحتاج بضعة أيام",
    qualityLow: "❌ غير ناضجة كفاية",
    predictedFertilizers: "الأسمدة المتوقعة",
    predictedFertilizersDesc: "بناءً على تحليل الصورة",
    generalFertilizers: "سجل الأسمدة العامة",
    contactTitle: "ارسل اعلانك لعرضه :",
    designedBy: "تم التصميم بواسطة المهندس",
    adminTitle: "لوحة التحكم (الإعلانات)",
    save: "حفظ التغييرات",
    warningNotWatermelon: "⚠️ تنبيه: يبدو أن هذا ليس بطيخاً."
  },
  en: {
    title: "My Watermelon",
    uploaderTitle: "How is your watermelon today?",
    uploaderDesc: "Photograph or upload your watermelon to check ripeness",
    uploadBtn: "Take Photo or Upload",
    loading: "Analyzing watermelon and predicting fertilizers...",
    reportTitle: "Inspection Report",
    summary: "Summary",
    estimatedQuality: "Estimated Quality",
    qualityHigh: "😍 Sweet! Buy it without hesitation",
    qualityMid: "🤔 Acceptable, might need a few days",
    qualityLow: "❌ Not ripe enough",
    predictedFertilizers: "Predicted Fertilizers",
    predictedFertilizersDesc: "Based on image analysis",
    generalFertilizers: "General Fertilizers Log",
    contactTitle: "Send your ad to display it:",
    designedBy: "Designed by Engineer",
    adminTitle: "Admin Panel (Ads)",
    save: "Save Changes",
    warningNotWatermelon: "⚠️ Warning: This doesn't look like a watermelon."
  },
  fr: {
    title: "Ma Pastèque",
    uploaderTitle: "Comment va votre pastèque aujourd'hui?",
    uploaderDesc: "Photographiez ou téléchargez votre pastèque pour vérifier sa maturité",
    uploadBtn: "Prendre une photo ou télécharger",
    loading: "Analyse de la pastèque et prédiction des engrais...",
    reportTitle: "Rapport d'inspection",
    summary: "Résumé",
    estimatedQuality: "Qualité estimée",
    qualityHigh: "😍 Sucré ! Achetez-le sans hésiter",
    qualityMid: "🤔 Acceptable, peut nécessiter quelques jours",
    qualityLow: "❌ Pas assez mûr",
    predictedFertilizers: "Engrais prédits",
    predictedFertilizersDesc: "Basé sur l'analyse d'image",
    generalFertilizers: "Registre général des engrais",
    contactTitle: "Envoyez votre annonce pour l'afficher :",
    designedBy: "Conçu par l'ingénieur",
    adminTitle: "Panneau d'administration (Publicités)",
    save: "Sauvegarder les modifications",
    warningNotWatermelon: "⚠️ Attention : Cela ne ressemble pas à une pastèque."
  },
  de: {
    title: "Meine Wassermelone",
    uploaderTitle: "Wie ist deine Wassermelone heute?",
    uploaderDesc: "Fotografieren oder laden Sie Ihre Wassermelone hoch, um die Reife zu prüfen",
    uploadBtn: "Foto machen oder hochladen",
    loading: "Wassermelone wird analysiert und Düngemittel werden vorhergesagt...",
    reportTitle: "Inspektionsbericht",
    summary: "Zusammenfassung",
    estimatedQuality: "Geschätzte Qualität",
    qualityHigh: "😍 Süß! Ohne Bedenken kaufen",
    qualityMid: "🤔 Akzeptabel, könnte noch ein paar Tage brauchen",
    qualityLow: "❌ Nicht reif genug",
    predictedFertilizers: "Vorhergesagte Düngemittel",
    predictedFertilizersDesc: "Basierend auf Bildanalyse",
    generalFertilizers: "Allgemeines Düngemittelprotokoll",
    contactTitle: "Senden Sie Ihre Anzeige, um sie anzuzeigen:",
    designedBy: "Entworfen vom Ingenieur",
    adminTitle: "Admin-Panel (Anzeigen)",
    save: "Änderungen speichern",
    warningNotWatermelon: "⚠️ Warnung: Das sieht nicht nach einer Wassermelone aus."
  },
  es: {
    title: "Mi Sandía",
    uploaderTitle: "¿Cómo está tu sandía hoy?",
    uploaderDesc: "Fotografía o sube tu sandía para comprobar su madurez",
    uploadBtn: "Tomar foto o subir",
    loading: "Analizando la sandía y prediciendo fertilizantes...",
    reportTitle: "Informe de inspección",
    summary: "Resumen",
    estimatedQuality: "Calidad estimada",
    qualityHigh: "😍 ¡Dulce! Cómpralo sin dudarlo",
    qualityMid: "🤔 Aceptable, podría necesitar unos días",
    qualityLow: "❌ No está lo suficientemente maduro",
    predictedFertilizers: "Fertilizantes predichos",
    predictedFertilizersDesc: "Basado en el análisis de imagen",
    generalFertilizers: "Registro general de fertilizantes",
    contactTitle: "Envía tu anuncio para mostrarlo:",
    designedBy: "Diseñado por el ingeniero",
    adminTitle: "Panel de administración (Anuncios)",
    save: "Guardar cambios",
    warningNotWatermelon: "⚠️ Advertencia: Esto no parece una sandía."
  },
  pt: {
    title: "Minha Melancia",
    uploaderTitle: "Como está sua melancia hoje?",
    uploaderDesc: "Fotografe ou carregue sua melancia para verificar a maturação",
    uploadBtn: "Tirar foto ou carregar",
    loading: "Analisando a melancia e prevendo fertilizantes...",
    reportTitle: "Relatório de Inspeção",
    summary: "Resumo",
    estimatedQuality: "Qualidade estimada",
    qualityHigh: "😍 Doce! Compre sem hesitar",
    qualityMid: "🤔 Aceitável, pode precisar de alguns dias",
    qualityLow: "❌ Não está maduro o suficiente",
    predictedFertilizers: "Fertilizantes previstos",
    predictedFertilizersDesc: "Baseado na análise de imagem",
    generalFertilizers: "Registro geral de fertilizantes",
    contactTitle: "Envie seu anúncio para exibi-lo:",
    designedBy: "Projetado pelo engenheiro",
    adminTitle: "Painel administrativo (Anúncios)",
    save: "Salvar alterações",
    warningNotWatermelon: "⚠️ Aviso: Isso não parece uma melancia."
  }
};
