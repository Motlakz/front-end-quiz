import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import WelcomePage from './pages/WelcomePage';
import HTMLQuiz from './components/questions/HTMLQuiz';
import CSSQuiz from './components/questions/CSSQuiz';
import JavaScriptQuiz from './components/questions/JavaScriptQuiz';
import AccessibilityQuiz from './components/questions/AccessibilityQuiz';
import { ThemeProvider } from './context/ThemeContext';
import ResultsPage from './pages/ResultsPage';
import { useState, useEffect } from 'react';
import { quizCards } from './utils/quizCards';
import NotFoundPage from './pages/404-not-found';

type QuizInfo = { icon: string; label: string; color: string };

function App() {
  const [currentQuiz, setCurrentQuiz] = useState<QuizInfo | null>(null);
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const matchingQuiz = quizCards.find(card => card.route === currentPath);
    setCurrentQuiz(matchingQuiz || null);
  }, [location]);

  return (
    <ThemeProvider>
      <main className="min-h-screen pb-10 dark:bg-slate-800 dark:text-gray-200">
        <Header currentQuiz={currentQuiz || undefined} />
        <section>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/html-quiz" element={<HTMLQuiz />} />
            <Route path="/css-quiz" element={<CSSQuiz />} />
            <Route path="/javascript-quiz" element={<JavaScriptQuiz />} />
            <Route path="/accessibility-quiz" element={<AccessibilityQuiz />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </section>
      </main>
    </ThemeProvider>
  );
}

export default App;
