
import { GoogleGenAI, Type } from "@google/genai";
import { AnalysisResult } from "./types";
import { Language } from "./translations";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const analyzeWatermelon = async (base64Image: string, lang: Language): Promise<AnalysisResult> => {
  const model = "gemini-3-flash-preview";
  
  const languageNames: Record<Language, string> = {
    ar: "Arabic",
    en: "English",
    fr: "French",
    de: "German",
    es: "Spanish",
    pt: "Portuguese"
  };

  const prompt = `
    Analyze this watermelon image with high accuracy. 
    IMPORTANT: Provide all text answers in ${languageNames[lang]}.
    
    1. Is this a watermelon?
    2. Determine ripeness percentage (0-100) based on external appearance.
    3. Provide a brief description.
    4. Estimate general quality.
    5. Based on appearance (size, rind color, pattern), guess chemical fertilizers potentially used (e.g., Urea, Potassium, Phosphorus) with percentages totaling 100%, and a brief reason why you suspect each based on the visual features.
  `;

  const response = await ai.models.generateContent({
    model: model,
    contents: {
      parts: [
        { inlineData: { mimeType: "image/jpeg", data: base64Image } },
        { text: prompt }
      ]
    },
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          ripenessPercentage: { type: Type.NUMBER },
          description: { type: Type.STRING },
          isWatermelon: { type: Type.BOOLEAN },
          estimatedQuality: { type: Type.STRING },
          predictedFertilizers: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                name: { type: Type.STRING },
                percentage: { type: Type.NUMBER },
                reason: { type: Type.STRING }
              },
              required: ["name", "percentage", "reason"]
            }
          }
        },
        required: ["ripenessPercentage", "description", "isWatermelon", "estimatedQuality", "predictedFertilizers"]
      }
    }
  });

  try {
    const text = response.text;
    if (!text) throw new Error("No response from model");
    const result = JSON.parse(text);
    return result as AnalysisResult;
  } catch (error) {
    console.error("Failed to parse Gemini response:", error);
    throw new Error("Analysis failed. Please try again.");
  }
};
