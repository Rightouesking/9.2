import React from 'react';
import { StatsDisplayProps } from '../../types';

export const StatsDisplay: React.FC<StatsDisplayProps> = ({ stats, showReadingTime = true }) => {
  const { characterCount, wordCount, readingTime } = stats;

  const formatTime = (time: number) => {
    const minutes = Math.floor(time);
    const seconds = Math.floor((time - minutes) * 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="grid grid-cols-3 gap-4 text-center text-gray-800">
      <div>
        <p className="text-sm">Characters</p>
        <p className="text-xl font-bold">{characterCount}</p>
      </div>
      <div>
        <p className="text-sm">Words</p>
        <p className="text-xl font-bold">{wordCount}</p>
      </div>
      {showReadingTime && (
        <div>
          <p className="text-sm">Reading Time</p>
          <p className="text-xl font-bold">{formatTime(readingTime)}</p>
        </div>
      )}
    </div>
  );
};