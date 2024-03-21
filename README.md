# Random Fact Generating API

This is a Random Fact Generating API that provides you with a random fact. It's implemented using Node.js and Express.js. You can use it for fun or while working with API fetching as a testing API.

The API is hosted on Vercel, and the code was written with the help of Replit, an online code editor.

## Usage

You can use the API by sending a GET request to the following endpoint:

Here's an example of how to use the API in Node.js:

```javascript
import fetch from 'node-fetch';

async function fetchRandomFact() {
  try {
    const response = await fetch('https://randomfactapi.vercel.app/fact');
    const data = await response.json();
    // Check if the response contains the 'fact' property
    if (data.fact) {
      console.log("Random Fact:", data.fact);
    } else {
      console.log("Unable to fetch random fact.");
    }
  } catch (error) {
    console.error("Error fetching random fact:", error);
  }
}
fetchRandomFact();
```

