import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import html from './../assets/images/icon-html.svg'
import css from './../assets/images/icon-css.svg'
import javascript from './../assets/images/icon-js.svg'
import access from './../assets/images/icon-accessibility.svg'

const WelcomePage = () => {
    const navigate = useNavigate();

    const cardStyle = "card cursor-pointer group bg-white dark:bg-slate-600 hover:scale-105 box-shadow-lite rounded-lg p-3 flex items-center gap-3";
    const iconStyle = "w-12 h-12 flex items-center justify-center rounded-md transition-all duration-300";
    const imgStyle = "w-8 h-8";

    return (
        <div className="grid sm:grid-cols-2 grid-cols-1 items-center mx-24">
            <article>
                <h1 className="sm:text-5xl dark:text-white">Welcome to the <span className="font-extrabold text-slate-700 dark:text-slate-200">Frontend Quiz!</span></h1>
                <p className="mt-12 italic">Pick a subject to get started</p>
            </article>
            <div className="cards flex flex-col gap-4">
                <motion.div
                    className={cardStyle}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => navigate('/html-quiz')}
                >
                    <div className={`${iconStyle} bg-orange-100 group-hover:bg-orange-200`}>
                        <img src={html} className={imgStyle} alt="HTML icon" />
                    </div>
                    <figcaption className="font-bold transition-colors duration-300 text-orange-600 dark:text-orange-300 group-hover:text-orange-700 dark:group-hover:text-orange-200">
                        HTML
                    </figcaption>
                </motion.div>

                <motion.div
                    className={cardStyle}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    onClick={() => navigate('/css-quiz')}
                >
                    <div className={`${iconStyle} bg-green-100 group-hover:bg-green-200`}>
                        <img src={css} className={imgStyle} alt="CSS icon" />
                    </div>
                    <figcaption className="font-bold transition-colors duration-300 text-green-600 dark:text-green-300 group-hover:text-green-700 dark:group-hover:text-green-200">
                        CSS
                    </figcaption>
                </motion.div>

                <motion.div
                    className={cardStyle}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    onClick={() => navigate('/javascript-quiz')}
                >
                    <div className={`${iconStyle} bg-indigo-100 group-hover:bg-indigo-200`}>
                        <img src={javascript} className={imgStyle} alt="JavaScript icon" />
                    </div>
                    <figcaption className="font-bold transition-colors duration-300 text-indigo-600 dark:text-indigo-300 group-hover:text-indigo-700 dark:group-hover:text-indigo-200">
                        JavaScript
                    </figcaption>
                </motion.div>

                <motion.div
                    className={cardStyle}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    onClick={() => navigate('/accessibility-quiz')}
                >
                    <div className={`${iconStyle} bg-purple-100 group-hover:bg-purple-200`}>
                        <img src={access} className={imgStyle} alt="Accessibility icon" />
                    </div>
                    <figcaption className="font-bold transition-colors duration-300 text-purple-600 dark:text-purple-300 group-hover:text-purple-700 dark:group-hover:text-purple-200">
                        Accessibility
                    </figcaption>
                </motion.div>
            </div>
        </div>
    )
}

export default WelcomePage
