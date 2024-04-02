const words = ["Trained", "Placed", "Hired"]; // Add more words if needed
let currentWordIndex = 0;
let currentLetterIndex = 0;
const textElement = document.getElementById("text");
let isWaiting = false;

function showNextLetter() {
    if (isWaiting) return;

    const currentWord = words[currentWordIndex];
    if (currentLetterIndex < currentWord.length) {
        const letter = currentWord[currentLetterIndex];
        textElement.innerHTML += `<span>${letter}</span>`;
        currentLetterIndex++;
    } else {
        isWaiting = true;
        setTimeout(() => {
            currentWordIndex = (currentWordIndex + 1) % words.length;
            currentLetterIndex = 0;
            textElement.innerHTML = ""; // Clear the text before showing the next word
            isWaiting = false;
        }, 700); // 1 second delay
    }
    // Remove existing cursor
    document.querySelectorAll(".cursor").forEach(cursor => cursor.remove());
    // Add cursor after the latest letter
    textElement.innerHTML += `<span class="cursor text-gray-500">|</span>`;
}

setInterval(showNextLetter, 250); // Adjust the interval time as needed
