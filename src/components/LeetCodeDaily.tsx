import { useState, useEffect } from 'react';
import { getDailyLeetCodeProblem } from '../utils/dailySelector';
import { getProgress, markProblemComplete, unmarkProblemComplete } from '../utils/storage';
import type { LeetCodeProblem, UserProgress } from '../types';
import './LeetCodeDaily.css';

const LeetCodeDaily = () => {
    const [problem, setProblem] = useState<LeetCodeProblem | null>(null);
    const [isCompleted, setIsCompleted] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            const dailyProblem = getDailyLeetCodeProblem();
            setProblem(dailyProblem);

            const progress: UserProgress = await getProgress();
            setIsCompleted(progress.completedProblems.includes(dailyProblem.id));
            setIsLoading(false);
        };

        loadData();
    }, []);

    const handleToggleComplete = async () => {
        if (!problem) return;

        if (isCompleted) {
            await unmarkProblemComplete(problem.id);
            setIsCompleted(false);
        } else {
            await markProblemComplete(problem.id);
            setIsCompleted(true);
        }
    };

    const getDifficultyClass = (difficulty: string) => {
        return `difficulty-badge difficulty-${difficulty.toLowerCase()}`;
    };

    if (isLoading) {
        return <div className="loading">Loading today's challenge...</div>;
    }

    if (!problem) {
        return <div className="error">No problem available</div>;
    }

    return (
        <div className="leetcode-daily">
            <div className="section-header">
                <div className="section-icon">💻</div>
                <h2>Today's LeetCode Challenge</h2>
            </div>

            <div className="problem-card">
                <div className="problem-header">
                    <span className="problem-id">#{problem.id}</span>
                    <span className={getDifficultyClass(problem.difficulty)}>
                        {problem.difficulty}
                    </span>
                </div>

                <h3 className="problem-title">{problem.title}</h3>

                <div className="topics-container">
                    {problem.topics.map((topic, index) => (
                        <span key={index} className="topic-tag">
                            {topic}
                        </span>
                    ))}
                </div>

                <div className="action-buttons">
                    <a
                        href={problem.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="solve-button"
                    >
                        <span className="button-icon">🚀</span>
                        Solve on LeetCode
                    </a>

                    <button
                        className={`complete-button ${isCompleted ? 'completed' : ''}`}
                        onClick={handleToggleComplete}
                    >
                        {isCompleted ? (
                            <>
                                <span className="button-icon">✅</span>
                                Completed!
                            </>
                        ) : (
                            <>
                                <span className="button-icon">⬜</span>
                                Mark Complete
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LeetCodeDaily;
