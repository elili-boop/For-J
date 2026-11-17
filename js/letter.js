const openLetter = document.getElementById("openLetter");
const closeLetter = document.getElementById("closeLetter");
const letterPopup = document.getElementById("letterPopup");

// Open the letter
openLetter.addEventListener("click", () => {
    letterPopup.showModal();
});

// Close the letter
closeLetter.addEventListener("click", () => {
    letterPopup.close();
});

// Close when clicking outside the letter
letterPopup.addEventListener("click", (event) => {
    if (event.target === letterPopup) {
        letterPopup.close();
    }
});