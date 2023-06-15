// Here's the generated code for the file ./client/index.ts

import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const inputBox = document.getElementById('input-box') as HTMLInputElement;
const responseBox = document.getElementById('response-box') as HTMLDivElement;
const storeButton = document.getElementById('store-button') as HTMLButtonElement;

const apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';

const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${process.env.API_TOKEN}`
};

inputBox.addEventListener('keydown', async (event) => {
  if (event.key === 'Enter') {
    const prompt = inputBox.value;
    const response = await getResponse(prompt);
    responseBox.innerText = response;
  }
});

storeButton.addEventListener('click', () => {
  const response = responseBox.innerText;
  const data = JSON.stringify({ response });
  // Store the response in a local json file
});

async function getResponse(prompt: string): Promise<string> {
  const data = JSON.stringify({
    prompt,
    max_tokens: 60,
    temperature: 0.5,
    n: 1,
    stop: ['\n']
  });

  const response = await axios.post(apiUrl, data, { headers });
  return response.data.choices[0].text.trim();
}