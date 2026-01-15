export interface LeetCodeProblem {
    id: number;
    title: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    topics: string[];
    url: string;
}

export interface SystemDesignTopic {
    id: number;
    title: string;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
    keyConceptsToLearn: string[];
    resources: { title: string; url: string }[];
    description: string;
}

export interface UserProgress {
    completedProblems: number[];
    studiedTopics: number[];
    currentStreak: number;
    lastActiveDate: string;
    totalProblemsCompleted: number;
    totalTopicsStudied: number;
}
