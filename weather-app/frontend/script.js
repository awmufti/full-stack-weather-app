// script.js
// This connects your HTML to your backend. Steps:
//   1. Grab references to your DOM elements (input, button, result container, error container)
//   2. Listen for the button click (or form submit)
//   3. Read the city name from the input
//   4. Call your backend endpoint (NOT the weather API directly — that's the backend's job)
//   5. Display the result, or show an error

// TODO 1: Get references to the elements you built in index.html
//   const cityInput = document.getElementById('...');
//   const searchBtn = document.getElementById('...');
//   const resultDiv = document.getElementById('...');
//   const errorDiv = document.getElementById('...');
function submitCity(event)
{
    event.preventDefault(); // stops the page from reloading
    const cityInput = document.getElementById('cityInput').value;
    alert(cityInput);
}
// TODO 2: Define the base URL of your backend
const API_BASE = 'http://localhost:5000/api/weather';

// TODO 3: Write an async function getWeather(city) that:
//   a. Clears any previous error/result
//   b. Fetches `${API_BASE}?city=${encodeURIComponent(city)}`
//   c. Checks response.ok — if false, throw an error with the message
//      your backend sent back
//   d. Parses the JSON
//   e. Calls a render function with the data (see TODO 5)
//   f. Has a try/catch that shows the error message in errorDiv if
//      something goes wrong (bad city, network issue, etc.)

// TODO 4: Add an event listener to your button (or form submit) that:
//   a. Prevents default form behavior if using a <form>
//   b. Reads the trimmed value from cityInput
//   c. If empty, show an error instead of calling the API
//   d. Otherwise calls getWeather(city)

// TODO 5: Write a render function, e.g. displayWeather(data), that:
//   a. Builds HTML showing city name, temperature, description, humidity, wind
//   b. Sets resultDiv.innerHTML to that content
//   Bonus: use the icon code from the API to show a weather icon image, e.g.
//     https://openweathermap.org/img/wn/{icon}@2x.png

// Debugging tip: use console.log() liberally while building this. Open your
// browser's DevTools console (F12) to see what your fetch calls are actually
// returning before you try to render it.
