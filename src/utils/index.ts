import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { playSound } from "./soundEffects";
import { useQuizTimer } from "./quizTimer";

export interface Question {
    question: string;
    options: string[];
    answer: string;
}

export interface Quiz {
    title: string;
    questions: Question[];
}

export function useQuiz(quiz: Quiz) {
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);
    const navigate = useNavigate();

    const currentQuestion = quiz.questions[currentQuestionIndex];
    const totalQuestions = quiz.questions.length;

    const onTimeUp = useCallback(() => {
        if (!showResult) {
            setShowResult(true);
            playSound('buttonSubmit');
        }
    }, [showResult]);

    const { timeLeft, isRunning, startTimer, stopTimer, resetTimer } = useQuizTimer({
        initialTime: 30,
        onTimeUp,
    });

    const handleSubmit = () => {
        setShowResult(true);
        if (selectedAnswer === currentQuestion.answer) {
            setScore(score + 1);
        }
        stopTimer();
        playSound('buttonSubmit');
    };

    const handleNext = () => {
        if (currentQuestionIndex < totalQuestions - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedAnswer(null);
            setShowResult(false);
            resetTimer();
            startTimer();
            playSound('buttonNext');
        } else {
            navigate('/results', { 
                state: { 
                    score, 
                    totalQuestions, 
                    quizTitle: quiz.title 
                } 
            });
        }
    };

    const handleSelectAnswer = (option: string) => {
        if (!showResult) {
            setSelectedAnswer(option);
            playSound('optionSelect');
        }
    };

    return {
        selectedAnswer,
        setSelectedAnswer: handleSelectAnswer,
        currentQuestionIndex,
        showResult,
        currentQuestion,
        totalQuestions,
        handleSubmit,
        handleNext,
        score,
        timeLeft,
        isRunning,
        startTimer,
        stopTimer,
        resetTimer,
    };
}
