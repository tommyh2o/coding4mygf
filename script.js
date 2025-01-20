// Function to reveal the hidden text
function revealText() {
    const textElement = document.getElementById('text');
    const iconElement = document.getElementById('icon');

    // Hide the icon and show the text
    iconElement.style.display = 'none';
    textElement.classList.remove('hidden');
}
