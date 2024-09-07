import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

    const handleSubmit = () => {
        setShowResult(true);
        if (selectedAnswer === currentQuestion.answer) {
            setScore(score + 1);
        }
    };

    const handleNext = () => {
        if (currentQuestionIndex < totalQuestions - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedAnswer(null);
            setShowResult(false);
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

    return {
        selectedAnswer,
        setSelectedAnswer,
        currentQuestionIndex,
        showResult,
        currentQuestion,
        totalQuestions,
        handleSubmit,
        handleNext,
        score,
    };
}
