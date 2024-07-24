let numberOfDrumButtons = document.querySelectorAll('.drum').length;

// Loop with i = 0
for(let i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function() {
        if (this.textContent === 'w') {
            let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
        } else if (this.textContent === 'a') {
            let tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
        }
        else if (this.textContent === 's') {
            let tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
        }
        else if (this.textContent === 'd') {
            let tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
        }
        else if (this.textContent === 'j') {
            let snare = new Audio('sounds/snare.mp3');
            snare.play();
        }
        else if (this.textContent === 'k') {
            let crash = new Audio('sounds/kick-bass.mp3');
            crash.play();
        }
        else if (this.textContent === 'l') {
            let kick = new Audio('sounds/crash.mp3');
            kick.play();
    }
});
}



