// Import necessary modules
import axios from 'axios';

// Define function to send message to chatgpt API
async function sendMessage(message: string): Promise<string> {
  // Get API token from .env file
  const apiToken = process.env.API_TOKEN;

  // Send message to chatgpt API
  const response = await axios.post('https://api.chatgpt.com/message', {
    message: message,
    token: apiToken
  });

  // Return response from chatgpt API
  return response.data.message;
}

// Get input element from HTML
const inputElement = document.getElementById('input') as HTMLInputElement;

// Get modal element from HTML
const modalElement = document.getElementById('modal');

// Get button element from HTML
const buttonElement = document.getElementById('button');

// Add event listener to button element
buttonElement.addEventListener('click', () => {
  // Get message from input element
  const message = inputElement.value;

  // Send message to chatgpt API and show response in modal
  sendMessage(message).then((response) => {
    modalElement.innerHTML = response;
    modalElement.style.display = 'block';
  });
});

// Add event listener to modal element to hide it when clicked
modalElement.addEventListener('click', () => {
  modalElement.style.display = 'none';
});

// Define function to store message in local json file
function storeMessage(message: string): void {
  // Get existing messages from local json file
  const existingMessages = JSON.parse(localStorage.getItem('messages') || '[]');

  // Add new message to existing messages
  existingMessages.push(message);

  // Store updated messages in local json file
  localStorage.setItem('messages', JSON.stringify(existingMessages));
}