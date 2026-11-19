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

const openPart2 = document.getElementById("openPart2");
const part2Popup = document.getElementById("part2Popup");
const closePart2 = document.getElementById("closePart2");

// Open Part 2
openPart2.addEventListener("click", () => {
    letterPopup.close();
    part2Popup.showModal();
});

// Close Part 2
closePart2.addEventListener("click", () => {
    part2Popup.close();
});

// Close when clicking outside Part 2
part2Popup.addEventListener("click", (event) => {
    if (event.target === part2Popup) {
        part2Popup.close();
    }
});
