import { useState, useEffect, useCallback } from 'react';

interface UseQuizTimerProps {
  initialTime: number;
  onTimeUp: () => void;
}

export const useQuizTimer = ({ initialTime, onTimeUp }: UseQuizTimerProps) => {
    const [timeLeft, setTimeLeft] = useState(initialTime);
    const [isRunning, setIsRunning] = useState(false);

    const startTimer = useCallback(() => {
        setIsRunning(true);
    }, []);

    const stopTimer = useCallback(() => {
        setIsRunning(false);
    }, []);

    const resetTimer = useCallback(() => {
        setTimeLeft(initialTime);
        setIsRunning(false);
    }, [initialTime]);

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (isRunning && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            onTimeUp();
            stopTimer();
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [isRunning, timeLeft, onTimeUp, stopTimer]);

    return {
        timeLeft,
        isRunning,
        startTimer,
        stopTimer,
        resetTimer,
    };
};
