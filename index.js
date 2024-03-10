const text = document.getElementById("textToConvert");
const convertBtn = document.getElementById("convertBtn");
const error = document.querySelector('.error-para');
const speechSynth = window.speechSynthesis;

convertBtn.addEventListener('click', function () {
    const enteredText = text.value.trim();

    if (!speechSynth.speaking) {
        if (enteredText.length === 0) {
            displayError("Nothing to Convert! Enter text in the text area.");
        } else {
            speakText(enteredText);
            updateButtonState("Sound is Playing...");
            setTimeout(() => {
                updateButtonState("Play Converted Sound");
            }, 5000);
        }
    }
});

function displayError(errorMessage) {
    error.textContent = errorMessage;
}

function speakText(textToSpeak) {
    error.textContent = "";
    const newUtter = new SpeechSynthesisUtterance(textToSpeak);
    speechSynth.speak(newUtter);
}

function updateButtonState(buttonText) {
    convertBtn.textContent = buttonText;
}
