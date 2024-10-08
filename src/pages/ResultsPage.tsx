import { AnimatePresence, motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { resultQuizCards } from '../utils/quizCards';
import { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import { playSound } from '../utils/soundEffects';
import { SuccessToast } from '../components/ToastMessage';

const ResultsPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { score, totalQuestions, quizTitle } = location.state || {};
    const currentQuiz = resultQuizCards[quizTitle as keyof typeof resultQuizCards];
    const [showAnimation, setShowAnimation] = useState(false);
    const [showSuccessToast, setShowSuccessToast] = useState(true);

    useEffect(() => {
        setShowAnimation(true);
        const animationTimer = setTimeout(() => setShowAnimation(false), 5000);
        const toastTimer = setTimeout(() => setShowSuccessToast(false), 5000);

        // Play sound effect
        const percentage = (score / totalQuestions) * 100;
        if (percentage >= 70) {
            playSound('highScore');
        } else if (percentage >= 40 && percentage <= 60) {
            playSound('mediumScore');
        } else if (percentage <= 30) {
            playSound('lowScore');
        }

        return () => {
            clearTimeout(animationTimer);
            clearTimeout(toastTimer);
        };
    }, [score, totalQuestions]);

    const handleRestartQuiz = () => {
        navigate(currentQuiz.route);
    };

    const handleGoHome = () => {
        navigate('/');
    };

    const getAnimation = () => {
        const percentage = (score / totalQuestions) * 100;
        if (percentage >= 70) {
            return <Confetti recycle={false} numberOfPieces={200} />;
        } else if (percentage >= 40 && percentage <= 60) {
            return (
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-4 h-4 bg-yellow-400 rounded-full"
                            initial={{ y: -20, x: Math.random() * window.innerWidth }}
                            animate={{
                                y: window.innerHeight,
                                rotate: 360,
                                transition: { duration: 2, repeat: Infinity, delay: i * 0.1 }
                            }}
                        />
                    ))}
                </motion.div>
            );
        } else if (percentage <= 30) {
            return (
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {[...Array(50)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-gray-400 opacity-50"
                            initial={{ 
                                y: -20, 
                                x: Math.random() * window.innerWidth,
                                rotate: Math.random() * 360 
                            }}
                            animate={{
                                y: window.innerHeight,
                                rotate: 360,
                                transition: { 
                                    duration: 5 + Math.random() * 5, 
                                    repeat: Infinity, 
                                    delay: i * 0.1 
                                }
                            }}
                        />
                    ))}
                </motion.div>
            );
        }
        return null;
    };

    return (
        <div className="grid md:grid-cols-2 grid-cols-1 items-center md:mx-12 mx-6 sm:mx-24 overflow-hidden">
            <AnimatePresence>
                {showSuccessToast && (
                    <SuccessToast message="Quiz complete!" />
                )}
            </AnimatePresence>
            {showAnimation && getAnimation()}
            <article className="text-center md:text-left max-w-lg w-full">
                <h1 className="sm:text-5xl text-2xl dark:text-white">Quiz Completed! <span className="font-extrabold text-slate-700 dark:text-slate-200">You scored...</span></h1>
            </article>
            <div className="m-4 box-shadow-lite bg-white dark:bg-slate-700 sm:p-12 p-8 rounded-2xl text-center">
                <div className="flex items-center border rounded-md p-2 justify-center gap-4 mb-4">
                    <div className={`w-8 h-8 flex items-center justify-center rounded-md bg-${currentQuiz.color}-200 dark:bg-${currentQuiz.color}-700`}>
                        <img 
                            src={currentQuiz.icon} 
                            className="w-8 h-8"
                            alt={`${currentQuiz.label} icon`} 
                        />
                    </div>
                    <h3 className="text-2xl font-bold">{currentQuiz.label}</h3>
                </div>
                <article className="my-12">
                    <p className="text-6xl font-bold text-purple-600">{score}</p>
                    <p className="text-xl text-gray-600 dark:text-gray-300">out of {totalQuestions}</p>
                </article>
                
                <div className="flex flex-col gap-4">
                    <motion.button
                        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleRestartQuiz}
                    >
                        Restart Quiz
                    </motion.button>
                    <motion.button
                        className="bg-white dark:bg-slate-600 hover:bg-gray-100 dark:hover:bg-slate-500 text-purple-600 dark:text-purple-300 font-bold py-3 px-6 rounded-lg border-2 border-purple-600 dark:border-purple-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleGoHome}
                    >
                        Go to Home
                    </motion.button>
                </div>
            </div>
        </div>
    )
}

export default ResultsPage
