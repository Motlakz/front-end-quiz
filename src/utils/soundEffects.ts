const getAudioPath = (filename: string) => {
    // In development, use the direct path
    if (import.meta.env.DEV) {
        return `/sounds/${filename}`;
    }
    // In production, prepend the base path
    return `/front-end-quiz/sounds/${filename}`;
};

const soundEffects = {
    optionSelect: new Audio(getAudioPath('option_select.mp3')),
    buttonNext: new Audio(getAudioPath('button_next.mp3')),
    buttonSubmit: new Audio(getAudioPath('button_submit.mp3')),
    highScore: new Audio(getAudioPath('high_score.mp3')),
    mediumScore: new Audio(getAudioPath('medium_score.mp3')),
    lowScore: new Audio(getAudioPath('low_score.mp3')),
};

export const playSound = (sound: keyof typeof soundEffects) => {
    soundEffects[sound].play().catch(error => console.error('Error playing sound:', error));
};
