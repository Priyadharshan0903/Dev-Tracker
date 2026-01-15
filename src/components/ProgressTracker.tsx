import { useState, useEffect } from 'react';
import { getProgress } from '../utils/storage';
import type { UserProgress } from '../types';
import './ProgressTracker.css';

const ProgressTracker = () => {
    const [progress, setProgress] = useState<UserProgress | null>(null);

    useEffect(() => {
        const loadProgress = async () => {
            const data = await getProgress();
            setProgress(data);
        };

        loadProgress();

        // Listen for storage changes
        const interval = setInterval(loadProgress, 1000);
        return () => clearInterval(interval);
    }, []);

    if (!progress) {
        return null;
    }

    return (
        <div className="progress-tracker">
            <div className="stat-card streak">
                <div className="stat-icon">🔥</div>
                <div className="stat-content">
                    <span className="stat-value">{progress.currentStreak}</span>
                    <span className="stat-label">Day Streak</span>
                </div>
            </div>

            <div className="stat-card problems">
                <div className="stat-icon">💻</div>
                <div className="stat-content">
                    <span className="stat-value">{progress.totalProblemsCompleted}</span>
                    <span className="stat-label">Problems</span>
                </div>
            </div>

            <div className="stat-card topics">
                <div className="stat-icon">🏗️</div>
                <div className="stat-content">
                    <span className="stat-value">{progress.totalTopicsStudied}</span>
                    <span className="stat-label">Designs</span>
                </div>
            </div>
        </div>
    );
};

export default ProgressTracker;
