const keys = document.querySelectorAll('.key');
const checkbox = document.querySelector('.checkbox__keys');
const switcher = document.querySelector('.switcher');
const keysSection = document.querySelector('.piano__keys');

const playNote = (note) => {
    const audio = new Audio(`./${note}.wav`);
    audio.play();
}

const handleMouseDown = (key) => {
    playNote(key.getAttribute('data-note'));

    if (key.className.includes('black')) {
        key.classList.add('black__pressed');
        return;
    }

    key.style.background = 'pink';
}

const handleMouseUp = (key) => {
    if(key.className.includes('black')){
        key.classList.remove('black__pressed');
        return;
    }
    key.style.background = 'white';
}

keys.forEach((key) => {
    key.addEventListener('mousedown', () =>  handleMouseDown(key));
    key.addEventListener('mouseup', () =>  handleMouseUp(key));

});

checkbox.addEventListener('change', ({target}) => {
    if(target.checked){
        switcher.classList.add('switcher__active');
        keysSection.classList.remove('disabled-keys');
        return;
    }
    switcher.classList.remove('switcher__active');
    keysSection.classList.add('disabled-keys');
})

const keyDownMapper = {
    "Tab": () => handleMouseDown(keys[0]),
    "1": () => handleMouseDown(keys[1]),
    "2": () => handleMouseDown(keys[2]),
    "3": () => handleMouseDown(keys[3]),
    "4": () => handleMouseDown(keys[4]),
    "5": () => handleMouseDown(keys[5]),
    "6": () => handleMouseDown(keys[6]),
    "7": () => handleMouseDown(keys[7]),
    "8": () => handleMouseDown(keys[8]),
    "9": () => handleMouseDown(keys[9]),
    "0": () => handleMouseDown(keys[10]),
    "q": () => handleMouseDown(keys[11]),
    "w": () => handleMouseDown(keys[12]),
    "e": () => handleMouseDown(keys[13]),
    "r": () => handleMouseDown(keys[14]),
    "t": () => handleMouseDown(keys[15]),
    "y": () => handleMouseDown(keys[16]),
    "u": () => handleMouseDown(keys[17]),
    "i": () => handleMouseDown(keys[18]),
    "o": () => handleMouseDown(keys[19]),
    "p": () => handleMouseDown(keys[20]),
    "a": () => handleMouseDown(keys[21]),
    "s": () => handleMouseDown(keys[22]),
    "d": () => handleMouseDown(keys[23]),
}

const keyUpMapper = {
    "Tab": () => handleMouseUp(keys[0]),
    "1": () => handleMouseUp(keys[1]),
    "2": () => handleMouseUp(keys[2]),
    "3": () => handleMouseUp(keys[3]),
    "4": () => handleMouseUp(keys[4]),
    "5": () => handleMouseUp(keys[5]),
    "6": () => handleMouseUp(keys[6]),
    "7": () => handleMouseUp(keys[7]),
    "8": () => handleMouseUp(keys[8]),
    "9": () => handleMouseUp(keys[9]),
    "0": () => handleMouseUp(keys[10]),
    "q": () => handleMouseUp(keys[11]),
    "w": () => handleMouseUp(keys[12]),
    "e": () => handleMouseUp(keys[13]),
    "r": () => handleMouseUp(keys[14]),
    "t": () => handleMouseUp(keys[15]),
    "y": () => handleMouseUp(keys[16]),
    "u": () => handleMouseUp(keys[17]),
    "i": () => handleMouseUp(keys[18]),
    "o": () => handleMouseUp(keys[19]),
    "p": () => handleMouseUp(keys[20]),
    "a": () => handleMouseUp(keys[21]),
    "s": () => handleMouseUp(keys[22]),
    "d": () => handleMouseUp(keys[23]),

}

document.addEventListener('keydown', (event) => {  
    event.preventDefault();
    keyDownMapper[event.key]()    
});

document.addEventListener('keyup', (event) => {
    keyUpMapper[event.key]()
});