var words = ["João Torres", "Web Developer"];
var wordIndex = 0;
var letterIndex = 0;
var typingSpeed = 100;
var pauseTime = 3000; // 4 segundos

function typeEffect() {
    var word = words[wordIndex];
    var spanElement = document.getElementById('typing-text');
    
    if (letterIndex < word.length) {
        spanElement.innerHTML += word.charAt(letterIndex);
        letterIndex++;
        setTimeout(typeEffect, typingSpeed);
    } else {
        setTimeout(eraseEffect, pauseTime);
    }
}

function eraseEffect() {
    var word = words[wordIndex];
    var spanElement = document.getElementById('typing-text');

    if (letterIndex > 0) {
        spanElement.innerHTML = word.substring(0, letterIndex - 1);
        letterIndex--;
        setTimeout(eraseEffect, typingSpeed);
    } else {
        spanElement.style.color = "rgb(22, 226, 22)";
        spanElement.style.textShadow = "1px 1px 2px grey";
        wordIndex++;
        if (wordIndex >= words.length) {
            wordIndex = 0;
        }
        setTimeout(typeEffect, typingSpeed);
    }
}

setTimeout(typeEffect, typingSpeed);