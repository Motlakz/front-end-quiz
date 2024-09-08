const soundEffects = {
    optionSelect: new Audio('/sounds/option_select.mp3'),
    buttonNext: new Audio('/sounds/button_next.mp3'),
    buttonSubmit: new Audio('/sounds/button_submit.mp3'),
};
  
export const playSound = (sound: 'optionSelect' | 'buttonNext' | 'buttonSubmit') => {
    soundEffects[sound].play().catch(error => console.error('Error playing sound:', error));
};
