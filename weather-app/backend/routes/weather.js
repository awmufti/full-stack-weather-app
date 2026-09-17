// routes/weather.js
// This file defines the /api/weather endpoint(s). Your job is to:
//   1. Accept a city name from the frontend
//   2. Call the OpenWeatherMap API with your key
//   3. Handle errors (bad city name, missing API key, API down)
//   4. Send back only the fields your frontend actually needs

// TODO 1: Import express and create a router:
import express from 'express';
import fetch from 'node-fetch';
const router = express.Router();

// TODO 2: Define a GET route, e.g. router.get('/', async (req, res) => { ... })
//   The city should come from the query string: req.query.city
//   Example request from frontend: GET /api/weather?city=Fairfax
// DONE
router.get('/', async (req, res) => {
    const city = req.query.city;

    // Validating city
    if(!city)
    {
        return res.status(400).json({ error: 'Invalid request: please enter a valid "city"'});
    }

    const url = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+process.env.WEATHER_API_KEY+'&units=imperial';
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    if(data.cod != 200)
    {
        return res.status(404).json({ error: 'Invalid request: "city" not found'});
    }
})

// TODO 3: Inside the route handler:
//   a. Validate that a city was provided. If not, respond with a 400 status
//      and a helpful error message.
//      DONE
//   b. Build the OpenWeatherMap URL. Something like:
//        https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=imperial
//      (units=imperial gives Fahrenheit; use metric for Celsius)
//      DONE
//   c. Use fetch (node-fetch) to call that URL.
//      DONE
//   d. Check if the response was successful. OpenWeatherMap returns a
//      "cod" field — 200 means success, 404 means city not found, etc.
//      Handle the not-found case gracefully (don't just crash).
//   e. Extract only what you need from the big JSON response, e.g.:
//        - city name
//        - temperature
//        - "feels like" temperature
//        - weather description (e.g. "light rain")
//        - weather icon code
//        - humidity
//        - wind speed
//   f. Send that cleaned-up object back to the frontend as JSON.

// TODO 4: Wrap your logic in a try/catch so unexpected errors (network issues,
//   bad JSON, etc.) return a 500 status instead of crashing the server.

// TODO 5: Export the router:
export default router;

// Testing tip: once this works, test it directly in your browser or Postman
// with a URL like http://localhost:5000/api/weather?city=London
// BEFORE you try to connect the frontend. Debug one layer at a time.
