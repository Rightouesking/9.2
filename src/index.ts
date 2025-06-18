// TextInput props
export interface TextInputProps {
  onTextChange: (text: string) => void;
  placeholder?: string;
  initialValue?: string;
}

// Statistics object
export interface TextStats {
  characterCount: number;
  wordCount: number;
  readingTime: number; // in minutes
}

// StatsDisplay props
export interface StatsDisplayProps {
  stats: TextStats;
  showReadingTime?: boolean;
}

// CharacterCounter props
export interface CharacterCounterProps {
  minWords?: number;
  maxWords?: number;
  targetReadingTime?: number;
}