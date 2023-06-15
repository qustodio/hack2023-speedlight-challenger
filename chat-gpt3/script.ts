const messageForm = document.getElementById('message-form') as HTMLFormElement;
const messageInput = document.getElementById('message-input') as HTMLInputElement;
const chatLog = document.getElementById('chatlog') as HTMLDivElement;

messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = messageInput.value;
    sendMessage(message);
    messageInput.value = '';
});

function sendMessage(message: string) {
    // Make an API request to your server with the user's message
    // Use Fetch or Axios library to send a POST request
    fetch('/api/send-message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message })
    })
    .then(response => response.json())
    .then(data => {
        // Display the response in the chat log
        appendMessage('ChatGPT', data.response);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function appendMessage(sender: string, message: string) {
    const messageElement = document.createElement('div');
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatLog.appendChild(messageElement);
    chatLog.scrollTop = chatLog.scrollHeight; // Auto-scroll to the bottom
}

