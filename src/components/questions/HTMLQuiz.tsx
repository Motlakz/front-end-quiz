import { AnswerCard } from "../AnswerCard";
import ProgressBar from "../ProgressBar";
import quizData from "./../../data.json";
import { motion, AnimatePresence } from "framer-motion";
import { useQuiz } from "../../utils";
import QuizNotFoundPage from "../../pages/QuizNotFoundPage";
import { useEffect, useState } from "react";
import { ErrorToast } from "../ToastMessage";

const HTMLQuiz = () => {
	const htmlQuiz = quizData.quizzes.find((quiz) => quiz.title === "HTML");
	const [error, setError] = useState<string | null>(null);
	const {
		selectedAnswer,
		setSelectedAnswer,
		currentQuestionIndex,
		showResult,
		currentQuestion,
		totalQuestions,
		handleSubmit,
		handleNext,
		timeLeft,
		startTimer,
		resetTimer,
	} = useQuiz(htmlQuiz || { title: '', icon: '', questions: [] });

	useEffect(() => {
		resetTimer();
		startTimer();
	}, [currentQuestionIndex, resetTimer, startTimer]);

	const handleSubmitWithValidation = () => {
		if (!selectedAnswer) {
			setError("Please select an answer before submitting.");
			return;
		}
		setError(null);
		handleSubmit();
	};

	if (!htmlQuiz) {
		return <QuizNotFoundPage />;
	}

	return (
		<div className="grid md:grid-cols-2 grid-cols-1 gap-10 items-center sm:mx-24 md:mx-12 mx-6">
			<article>
				<span className="italic text-gray-600 dark:text-gray-300">Question {currentQuestionIndex + 1} of {totalQuestions}</span>
				<h1 className="sm:text-4xl text-3xl text-gray-800 dark:text-white mt-2 mb-6">{currentQuestion.question}</h1>
				<ProgressBar progress={(currentQuestionIndex + 1) / totalQuestions * 100} />
				<div className="mt-4 text-2xl font-semibold dark:text-purple-400 text-purple-600">Time left: {timeLeft}s</div>
			</article>
			<div className="cards flex flex-col gap-4 mt-8">
				{currentQuestion.options.map((option, index) => (
					<AnswerCard
						key={index}
						index={index}
						label={option}
						selected={selectedAnswer === option}
						correct={showResult && option === currentQuestion.answer}
						incorrect={showResult && selectedAnswer === option && option !== currentQuestion.answer}
						onClick={() => setSelectedAnswer(option)}
					/>
				))}
				<AnimatePresence>
					{error && <ErrorToast message={error} />}
				</AnimatePresence>
				{!showResult ? (
					<motion.button
						className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						onClick={handleSubmitWithValidation}
					>
						Submit Answer
					</motion.button>
				) : (
					<motion.button
						className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg"
						whileHover={{ scale: 1.00 }}
						whileTap={{ scale: 0.98 }}
						onClick={handleNext}
					>
						{currentQuestionIndex < totalQuestions - 1 ? 'Next Question' : 'Finish Quiz'}
					</motion.button>
				)}
			</div>
		</div>
	);
};

export default HTMLQuiz;
