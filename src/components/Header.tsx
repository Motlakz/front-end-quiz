import React, { useContext, useState } from 'react';
import { ChevronDown, Sun, Moon, Monitor } from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';

interface HeaderProps {
    currentQuiz?: {
        icon: string;
        label: string;
        color: string;
    };
}

const Header: React.FC<HeaderProps> = ({ currentQuiz }) => {
    const { theme, setTheme } = useContext(ThemeContext) ?? { theme: 'system', setTheme: () => {} };
    const [isOpen, setIsOpen] = useState(false);

    const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
        setTheme(newTheme);
        setIsOpen(false);
    };

    // Function to get the current theme icon
    const getThemeIcon = () => {
        switch (theme) {
            case 'light': return <Sun className="text-yellow-500" size={24} />;
            case 'dark': return <Moon className="text-slate-400" size={24} />;
            default: return <Monitor className="text-blue-500" size={24} />;
        }
    };

    return (
        <header className="flex justify-between items-center flex-col sm:flex-row gap-8 py-12 md:mx-12 mx-24">
            {currentQuiz ? (
                <div className="flex items-center rounded-md p-2 justify-center gap-4">
                    <div className={`w-8 h-8 flex items-center justify-center rounded-md bg-${currentQuiz.color}-100 dark:bg-${currentQuiz.color}-300`}>
                        <img 
                            src={currentQuiz.icon} 
                            className="w-6 h-6"
                            alt={`${currentQuiz.label} icon`} 
                        />
                    </div>
                    <h3 className="text-2xl font-bold dark:text-gray-200">{currentQuiz.label}</h3>
                </div>
            ) : (
                <a href="/front-end-quiz/home" className="text-4xl sm:text-2xl dark:text-gray-200 font-semibold">Quiz App</a>
            )}
            
            <div className="relative">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex border dark:border-gray-400 items-center space-x-2 p-2 rounded-md bg-gray-100 dark:bg-gray-800"
                    aria-label="Theme selection"
                >
                    {getThemeIcon()}
                    <ChevronDown size={20} />
                </button>
                
                {isOpen && (
                    <div className="absolute z-20 -left-14 sm:right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5">
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            <button
                                onClick={() => handleThemeChange('light')}
                                className="flex group items-center justify-between px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-yellow-100 dark:hover:bg-gray-600 w-full"
                                role="menuitem"
                            >
                                <Sun className="mr-3 group-hover:border-yellow-500 text-yellow-500 p-2 border rounded-md" size={40} />
                                Light
                            </button>
                            <button
                                onClick={() => handleThemeChange('dark')}
                                className="flex items-center justify-between group px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-slate-200 dark:hover:bg-gray-600 w-full"
                                role="menuitem"
                            >
                                <Moon className="mr-3 group-hover:border-slate-400 text-slate-600 dark:text-slate-400 p-2 border rounded-md" size={40} />
                                Dark
                            </button>
                            <button
                                onClick={() => handleThemeChange('system')}
                                className="flex items-center group justify-between px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-600 w-full"
                                role="menuitem"
                            >
                                <Monitor className="mr-3 group-hover:border-blue-400 text-blue-500 dark:text-blue-400 border p-2 rounded-md" size={40} />
                                System
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header;
