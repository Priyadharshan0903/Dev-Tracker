import { useState, useEffect } from 'react';
import { getDailySystemDesignTopic } from '../utils/dailySelector';
import { getProgress, markTopicStudied, unmarkTopicStudied } from '../utils/storage';
import type { SystemDesignTopic, UserProgress } from '../types';
import './SystemDesign.css';

const SystemDesign = () => {
    const [topic, setTopic] = useState<SystemDesignTopic | null>(null);
    const [isStudied, setIsStudied] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [expandedConcepts, setExpandedConcepts] = useState(false);

    useEffect(() => {
        const loadData = async () => {
            const dailyTopic = getDailySystemDesignTopic();
            setTopic(dailyTopic);

            const progress: UserProgress = await getProgress();
            setIsStudied(progress.studiedTopics.includes(dailyTopic.id));
            setIsLoading(false);
        };

        loadData();
    }, []);

    const handleToggleStudied = async () => {
        if (!topic) return;

        if (isStudied) {
            await unmarkTopicStudied(topic.id);
            setIsStudied(false);
        } else {
            await markTopicStudied(topic.id);
            setIsStudied(true);
        }
    };

    const getDifficultyClass = (difficulty: string) => {
        return `difficulty-badge sd-difficulty-${difficulty.toLowerCase()}`;
    };

    if (isLoading) {
        return <div className="loading">Loading today's case study...</div>;
    }

    if (!topic) {
        return <div className="error">No topic available</div>;
    }

    return (
        <div className="system-design">
            <div className="section-header">
                <div className="section-icon">🏗️</div>
                <h2>Today's System Design</h2>
            </div>

            <div className="topic-card">
                <div className="topic-header">
                    <span className={getDifficultyClass(topic.difficulty)}>
                        {topic.difficulty}
                    </span>
                </div>

                <h3 className="topic-title">{topic.title}</h3>

                <p className="topic-description">{topic.description}</p>

                <div className="concepts-section">
                    <button
                        className="concepts-toggle"
                        onClick={() => setExpandedConcepts(!expandedConcepts)}
                    >
                        <span className="toggle-icon">{expandedConcepts ? '📖' : '📚'}</span>
                        Key Concepts to Learn
                        <span className="arrow">{expandedConcepts ? '▲' : '▼'}</span>
                    </button>

                    {expandedConcepts && (
                        <ul className="concepts-list">
                            {topic.keyConceptsToLearn.map((concept, index) => (
                                <li key={index} className="concept-item">
                                    <span className="concept-bullet">→</span>
                                    {concept}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <div className="resources-section">
                    <h4 className="resources-title">
                        <span className="resources-icon">🎓</span>
                        Study Resources
                    </h4>
                    <div className="resources-list">
                        {topic.resources.map((resource, index) => (
                            <a
                                key={index}
                                href={resource.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="resource-link"
                            >
                                <span className="resource-icon">🔗</span>
                                {resource.title}
                            </a>
                        ))}
                    </div>
                </div>

                <button
                    className={`studied-button ${isStudied ? 'studied' : ''}`}
                    onClick={handleToggleStudied}
                >
                    {isStudied ? (
                        <>
                            <span className="button-icon">✅</span>
                            Studied!
                        </>
                    ) : (
                        <>
                            <span className="button-icon">📝</span>
                            Mark as Studied
                        </>
                    )}
                </button>
            </div>
        </div>
    );
};

export default SystemDesign;
