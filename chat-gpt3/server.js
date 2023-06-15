const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

app.post('/api/send-message', (req, res) => {
    const message = req.body.message;
    const chatGptUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.CHATGPT_API_TOKEN}`
    };

    axios.post(chatGptUrl, {
        prompt: message,
        max_tokens: 50
    }, {
        headers: headers
    })
    .then(response => {
        const completion = response.data.choices[0].text.trim();
        res.json({ response: completion });
    })
    .catch(error => {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred' });
    });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

