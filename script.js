function addRecommendation() {
    const name = document.getElementById('recommendation-name').value;
    const message = document.getElementById('message').value;

    if (message.trim() !== '') {
        const recommendationList = document.getElementById('recommendation-list');
        const newRecommendation = document.createElement('li');
        newRecommendation.classList.add('recommendation-card');
        newRecommendation.textContent = `"${message}"`;
        recommendationList.appendChild(newRecommendation);

        showPopup();

        // Clear the form
        document.getElementById('recommendation-name').value = '';
        document.getElementById('message').value = '';
    } else {
        alert('Please enter a message.');
    }
}

function showPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'flex';
}

function hidePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}
