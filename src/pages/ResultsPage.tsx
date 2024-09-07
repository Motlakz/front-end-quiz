import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { resultQuizCards } from '../utils/quizCards';

const ResultsPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { score, totalQuestions, quizTitle } = location.state || {};
    const currentQuiz = resultQuizCards[quizTitle as keyof typeof resultQuizCards];

    const handleRestartQuiz = () => {
        navigate(currentQuiz.route);
    };

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 items-center sm:mx-24 mx-12">
            <article>
                <h1 className="sm:text-5xl text-3xl dark:text-white">Quiz completed!</h1>
                <h2 className="sm:text-5xl text-3xl mt-4 font-extrabold text-slate-700 dark:text-slate-200">
                    You scored...
                </h2>
            </article>
            <div className="mt-8 bg-white dark:bg-slate-700 sm:p-12 p-8 rounded-2xl shadow-lg text-center">
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
