// Import necessary modules
import axios from 'axios';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Get the input element from the DOM
const inputElement = document.getElementById('input') as HTMLInputElement;

// Get the response element from the DOM
const responseElement = document.getElementById('response');

// Get the button element from the DOM
const buttonElement = document.getElementById('button');

// Add event listener to the button element
buttonElement.addEventListener('click', async () => {
  try {
    // Get the input value
    const inputValue = inputElement.value;

    // Send the input value to the chatgpt API
    const response = await axios.post('https://api.chatgpt.com/v1/chat', {
      message: inputValue,
      token: process.env.CHATGPT_API_TOKEN,
    });

    // Display the response in the response element
    responseElement.innerText = response.data.message;
  } catch (error) {
    console.error(error);
  }
});

// Add event listener to the response element
responseElement.addEventListener('click', async () => {
  try {
    // Get the response value
    const responseValue = responseElement.innerText;

    // Send the response value to the artifact storage API
    await axios.post('https://api.artifactstorage.com/v1/artifacts', {
      message: responseValue,
    });
  } catch (error) {
    console.error(error);
  }
});