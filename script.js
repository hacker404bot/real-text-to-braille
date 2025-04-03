// Braille Unicode Mapping
const brailleDict = {
    "a": "⠁", "b": "⠃", "c": "⠉", "d": "⠙", "e": "⠑",
    "f": "⠋", "g": "⠛", "h": "⠓", "i": "⠊", "j": "⠚",
    "k": "⠅", "l": "⠇", "m": "⠍", "n": "⠝", "o": "⠕",
    "p": "⠏", "q": "⠟", "r": "⠗", "s": "⠎", "t": "⠞",
    "u": "⠥", "v": "⠧", "w": "⠺", "x": "⠭", "y": "⠽", "z": "⠵",
    " ": " ", ",": "⠂", ".": "⠲", "?": "⠦", "!": "⠖",
    "0": "⠴", "1": "⠂", "2": "⠆", "3": "⠒", "4": "⠲",
    "5": "⠢", "6": "⠖", "7": "⠶", "8": "⠦", "9": "⠔"
};

// Function to convert text to Braille
function textToBraille(text) {
    return text.toLowerCase().split("").map(char => brailleDict[char] || char).join("");
}

// Update Braille output in real time
document.getElementById("textInput").addEventListener("input", function() {
    const text = this.value;
    document.getElementById("brailleOutput").textContent = textToBraille(text);
});

// Speak text aloud
function speakText() {
    let text = document.getElementById("textInput").value;
    let speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";
    speech.pitch = 1;
    speech.rate = 1;
    window.speechSynthesis.speak(speech);
}
