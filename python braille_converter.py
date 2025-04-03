import pyttsx3

# Braille Unicode Mapping
braille_dict = {
    "a": "⠁", "b": "⠃", "c": "⠉", "d": "⠙", "e": "⠑",
    "f": "⠋", "g": "⠛", "h": "⠓", "i": "⠊", "j": "⠚",
    "k": "⠅", "l": "⠇", "m": "⠍", "n": "⠝", "o": "⠕",
    "p": "⠏", "q": "⠟", "r": "⠗", "s": "⠎", "t": "⠞",
    "u": "⠥", "v": "⠧", "w": "⠺", "x": "⠭", "y": "⠽", "z": "⠵",
    " ": " ", ",": "⠂", ".": "⠲", "?": "⠦", "!": "⠖",
    "0": "⠴", "1": "⠂", "2": "⠆", "3": "⠒", "4": "⠲",
    "5": "⠢", "6": "⠖", "7": "⠶", "8": "⠦", "9": "⠔"
}

def text_to_braille(text):
    text = text.lower()  # Convert to lowercase for mapping
    return "".join(braille_dict.get(char, char) for char in text)

def speak_text(text):
    engine = pyttsx3.init()
    engine.say(text)
    engine.runAndWait()

# Example usage
if __name__ == "__main__":
    text = input("Enter text to convert to Braille: ")
    braille_output = text_to_braille(text)
    
    print("Braille Output:", braille_output)
    
    # Speak the original text
    speak_text(text)
