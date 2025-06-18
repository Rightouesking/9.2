import React from 'react';
import './index.css';
import { CharacterCounter } from './components/CharacterCounter/CharacterCounter';

function App() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <CharacterCounter minWords={25} maxWords={100} targetReadingTime={2} />
    </main>
  );
}

export default App;