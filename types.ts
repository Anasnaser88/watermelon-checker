
export interface PredictedFertilizer {
  name: string;
  percentage: number;
  reason: string;
}

export interface AnalysisResult {
  ripenessPercentage: number;
  description: string;
  isWatermelon: boolean;
  estimatedQuality: string;
  predictedFertilizers: PredictedFertilizer[];
}

export interface AdConfig {
  imageUrl: string;
  link: string;
  text: string;
  isActive: boolean;
}

export interface Fertilizer {
  id: number;
  name: string;
  type: string;
  description: string;
}
