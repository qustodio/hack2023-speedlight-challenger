const mocha = require('mocha');
const axios = require('axios');
const assert = require('assert');

describe('Math Challenge Endpoint', () => {
  it('should return a solution for a valid math problem', async () => {
    const response = await axios.post('http://127.0.0.1:5000/mathchallenge', {
      challenge: 'What is 2 + 3?',
    });
    assert.equal(response.status, 200);
    assert.equal(response.data.solution, '5');
  });

  it('should return a 400 for an invalid request', async () => {
    const response = await axios.post('http://127.0.0.1:5000/mathchallenge', {
      challenge: '',
    });
    assert.equal(response.status, 400);
  });

  it('should return a 400 for an invalid math problem', async () => {
    const response = await axios.post('http://127.0.0.1:5000/mathchallenge', {
      challenge: 'What is 2 + ?',
    });
    assert.equal(response.status, 400);
  });
});
