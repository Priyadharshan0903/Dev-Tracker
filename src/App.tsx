import { useState } from 'react';
import LeetCodeDaily from './components/LeetCodeDaily';
import SystemDesign from './components/SystemDesign';
import ProgressTracker from './components/ProgressTracker';
import { getTodayDateString } from './utils/dailySelector';
import './App.css';

type TabType = 'leetcode' | 'systemdesign';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('leetcode');

  return (
    <div className="app">
      <header className="app-header">
        <div className="brand">
          <span className="brand-icon">💪</span>
          <h1 className="brand-name">Grind Hard</h1>
        </div>
        <p className="date-display">{getTodayDateString()}</p>
      </header>

      <ProgressTracker />

      <nav className="tab-navigation">
        <button
          className={`tab-button ${activeTab === 'leetcode' ? 'active' : ''}`}
          onClick={() => setActiveTab('leetcode')}
        >
          <span className="tab-icon">💻</span>
          LeetCode
        </button>
        <button
          className={`tab-button ${activeTab === 'systemdesign' ? 'active' : ''}`}
          onClick={() => setActiveTab('systemdesign')}
        >
          <span className="tab-icon">🏗️</span>
          System Design
        </button>
      </nav>

      <main className="main-content">
        {activeTab === 'leetcode' ? <LeetCodeDaily /> : <SystemDesign />}
      </main>

      <footer className="app-footer">
        <p>Keep grinding! 🚀</p>
      </footer>
    </div>
  );
}

export default App;
