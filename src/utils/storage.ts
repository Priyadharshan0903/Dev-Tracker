import type { UserProgress } from '../types';

const STORAGE_KEY = 'grind_hard_progress';

const defaultProgress: UserProgress = {
    completedProblems: [],
    studiedTopics: [],
    currentStreak: 0,
    lastActiveDate: '',
    totalProblemsCompleted: 0,
    totalTopicsStudied: 0
};

// Check if running in Chrome extension context
const isChromeExtension = (): boolean => {
    return typeof chrome !== 'undefined' && chrome.storage !== undefined;
};

export const getProgress = async (): Promise<UserProgress> => {
    if (isChromeExtension()) {
        return new Promise((resolve) => {
            chrome.storage.local.get([STORAGE_KEY], (result: { [key: string]: UserProgress | undefined }) => {
                resolve(result[STORAGE_KEY] ?? defaultProgress);
            });
        });
    } else {
        // Fallback to localStorage for development
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : defaultProgress;
    }
};

export const saveProgress = async (progress: UserProgress): Promise<void> => {
    if (isChromeExtension()) {
        return new Promise((resolve) => {
            chrome.storage.local.set({ [STORAGE_KEY]: progress }, resolve);
        });
    } else {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    }
};

export const updateStreak = (progress: UserProgress): UserProgress => {
    const today = new Date().toDateString();
    const lastActive = progress.lastActiveDate;

    if (lastActive === today) {
        return progress;
    }

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    if (lastActive === yesterday.toDateString()) {
        return {
            ...progress,
            currentStreak: progress.currentStreak + 1,
            lastActiveDate: today
        };
    }

    return {
        ...progress,
        currentStreak: 1,
        lastActiveDate: today
    };
};

export const markProblemComplete = async (problemId: number): Promise<UserProgress> => {
    const progress = await getProgress();

    if (progress.completedProblems.includes(problemId)) {
        return progress;
    }

    const updatedProgress = updateStreak({
        ...progress,
        completedProblems: [...progress.completedProblems, problemId],
        totalProblemsCompleted: progress.totalProblemsCompleted + 1
    });

    await saveProgress(updatedProgress);
    return updatedProgress;
};

export const markTopicStudied = async (topicId: number): Promise<UserProgress> => {
    const progress = await getProgress();

    if (progress.studiedTopics.includes(topicId)) {
        return progress;
    }

    const updatedProgress = updateStreak({
        ...progress,
        studiedTopics: [...progress.studiedTopics, topicId],
        totalTopicsStudied: progress.totalTopicsStudied + 1
    });

    await saveProgress(updatedProgress);
    return updatedProgress;
};

export const unmarkProblemComplete = async (problemId: number): Promise<UserProgress> => {
    const progress = await getProgress();

    const updatedProgress = {
        ...progress,
        completedProblems: progress.completedProblems.filter(id => id !== problemId),
        totalProblemsCompleted: Math.max(0, progress.totalProblemsCompleted - 1)
    };

    await saveProgress(updatedProgress);
    return updatedProgress;
};

export const unmarkTopicStudied = async (topicId: number): Promise<UserProgress> => {
    const progress = await getProgress();

    const updatedProgress = {
        ...progress,
        studiedTopics: progress.studiedTopics.filter(id => id !== topicId),
        totalTopicsStudied: Math.max(0, progress.totalTopicsStudied - 1)
    };

    await saveProgress(updatedProgress);
    return updatedProgress;
};
