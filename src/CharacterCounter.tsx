// src/components/CharacterCounter/CharacterCounter.tsx
import React, { useState, useEffect } from 'react';
import { TextInput } from '../TextInput/TextInput';
import { StatsDisplay } from '../StatsDisplay/StatsDisplay';
import { CharacterCounterProps, TextStats } from '../../types';

export const CharacterCounter: React.FC<CharacterCounterProps> = ({
  minWords = 0,
  maxWords = 100,
  targetReadingTime = 2,
}) => {
  const [text, setText] = useState('');
  const [stats, setStats] = useState<TextStats>({
    characterCount: 0,
    wordCount: 0,
    readingTime: 0,
  });

  const calculateStats = (text: string): TextStats => {
    const words = text.trim().split(/\s+/).filter(Boolean);
    const wordCount = words.length;
    const characterCount = text.length;
    const readingTime = wordCount / 200; // avg 200 WPM

    return {
      characterCount,
      wordCount,
      readingTime: parseFloat(readingTime.toFixed(2)),
    };
  };

  useEffect(() => {
    setStats(calculateStats(text));
  }, [text]);

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white rounded shadow">
      <TextInput onTextChange={setText} placeholder="Start typing your article..." />
      <StatsDisplay stats={stats} showReadingTime={true} />
      <div className="text-sm mt-2 text-gray-600">
        Min: {minWords} | Max: {maxWords} words | Target Time: {targetReadingTime} min
      </div>
    </div>
  );
};