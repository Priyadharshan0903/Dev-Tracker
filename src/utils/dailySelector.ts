import { leetcodeProblems } from '../data/leetcodeProblems';
import { systemDesignTopics } from '../data/systemDesignTopics';
import type { LeetCodeProblem, SystemDesignTopic } from '../types';

// Use date as seed for consistent daily selections
const getDateSeed = (): number => {
    const today = new Date();
    return today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
};

// Simple but deterministic pseudo-random based on seed
const seededRandom = (seed: number): number => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
};

export const getDailyLeetCodeProblem = (): LeetCodeProblem => {
    const seed = getDateSeed();
    const index = Math.floor(seededRandom(seed) * leetcodeProblems.length);
    return leetcodeProblems[index];
};

export const getDailySystemDesignTopic = (): SystemDesignTopic => {
    const seed = getDateSeed() + 1000; // Different offset for variety
    const index = Math.floor(seededRandom(seed) * systemDesignTopics.length);
    return systemDesignTopics[index];
};

export const getTodayDateString = (): string => {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    return today.toLocaleDateString('en-US', options);
};
