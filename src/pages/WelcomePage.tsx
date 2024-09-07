import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import html from './../assets/images/icon-html.svg'
import css from './../assets/images/icon-css.svg'
import javascript from './../assets/images/icon-js.svg'
import access from './../assets/images/icon-accessibility.svg'

const WelcomePage = () => {
    const navigate = useNavigate();

    const quizCards = [
        { icon: html, label: 'HTML', color: 'orange', route: '/html-quiz' },
        { icon: css, label: 'CSS', color: 'green', route: '/css-quiz' },
        { icon: javascript, label: 'JavaScript', color: 'indigo', route: '/javascript-quiz' },
        { icon: access, label: 'Accessibility', color: 'purple', route: '/accessibility-quiz' },
    ];

    return (
        <div className="grid sm:grid-cols-2 grid-cols-1 items-center mx-24">
            <article>
                <h1 className="sm:text-5xl dark:text-white">Welcome to the <span className="font-extrabold text-slate-700 dark:text-slate-200">Frontend Quiz!</span></h1>
                <p className="mt-12 italic">Pick a subject to get started</p>
            </article>
            <div className="cards flex flex-col gap-4">
                {quizCards.map((card, index) => (
                    <motion.div
                        key={card.label}
                        className={`card cursor-pointer group bg-white dark:bg-slate-600 hover:scale-105 box-shadow-lite rounded-lg p-3 flex items-center gap-3`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        onClick={() => navigate(card.route)}
                    >
                        <div className={`w-12 h-12 flex items-center justify-center rounded-md transition-all duration-300 bg-${card.color}-200 group-hover:bg-${card.color}-100 dark:bg-${card.color}-700 dark:group-hover:bg-${card.color}-600`}>
                            <img 
                                src={card.icon} 
                                className="w-8 h-8"
                                alt={`${card.label} icon`} 
                            />
                        </div>
                        <figcaption 
                            className={`font-bold transition-colors duration-300 
                                ${card.color === 'indigo' 
                                    ? 'text-indigo-600 dark:text-indigo-300 group-hover:text-indigo-700 dark:group-hover:text-indigo-200' 
                                    : `text-${card.color}-600 dark:text-${card.color}-400 group-hover:text-${card.color}-700 dark:group-hover:text-${card.color}-300`
                                }`}
                        >
                            {card.label}
                        </figcaption>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default WelcomePage
