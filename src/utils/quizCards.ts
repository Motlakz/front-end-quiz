import html from './../assets/images/icon-html.svg'
import css from './../assets/images/icon-css.svg'
import javascript from './../assets/images/icon-js.svg'
import access from './../assets/images/icon-accessibility.svg'

export const resultQuizCards = {
    'HTML': { icon: html, label: 'HTML', color: 'orange', route: '/html-quiz' },
    'CSS': { icon: css, label: 'CSS', color: 'green', route: '/css-quiz' },
    'JavaScript': { icon: javascript, label: 'JavaScript', color: 'indigo', route: '/javascript-quiz' },
    'Accessibility': { icon: access, label: 'Accessibility', color: 'purple', route: '/accessibility-quiz' },
};

export const quizCards = [
    { icon: html, label: 'HTML', color: 'orange', route: '/html-quiz' },
    { icon: css, label: 'CSS', color: 'green', route: '/css-quiz' },
    { icon: javascript, label: 'JavaScript', color: 'indigo', route: '/javascript-quiz' },
    { icon: access, label: 'Accessibility', color: 'purple', route: '/accessibility-quiz' },
];
