
export interface ProcessingResult {
  originalTranscription: string;
  modernEnglish: string;
  modernTamil: string;
  historicalContext: string;
  confidenceScore: number;
}

export interface ManuscriptFile {
  id: string;
  name: string;
  preview: string;
  base64: string;
  timestamp: number;
  result?: ProcessingResult;
  status: 'idle' | 'processing' | 'completed' | 'error';
  error?: string;
}

export enum AppMode {
  FULL = 'full',
  EXTENSION = 'extension'
}
