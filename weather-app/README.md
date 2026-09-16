# Weather App — Project Skeleton

A full-stack project: Node/Express backend that calls the OpenWeatherMap API, and a
vanilla HTML/CSS/JS frontend that talks to your backend. Every file has TODO
comments describing what to build — no solutions, just the plan.

## Folder structure

```
weather-app/
  backend/
    server.js          <- sets up and starts the Express server
    routes/weather.js  <- the /api/weather endpoint logic
    package.json        <- dependencies (already filled in)
    .env.example        <- rename to .env, add your API key
  frontend/
    index.html          <- page structure
    style.css           <- styling (optional to follow exactly)
    script.js           <- fetch logic + rendering
```

## Step 0 — Get your API key DONE
1. Sign up free at https://openweathermap.org/api DONE
2. Generate an API key (can take a few minutes to activate) DONE
3. Copy `.env.example` to `.env` inside `backend/` and paste your key in DONE

## Step 1 — Backend
1. `cd backend && npm install` DONE
2. Open `server.js` and work through the TODOs in order
3. Open `routes/weather.js` and work through the TODOs
4. Run it: `npm run dev`
5. Test it directly in your browser before touching the frontend:
   `http://localhost:5000/api/weather?city=London`
   You should get back clean JSON. Don't move on until this works.

## Step 2 — Frontend
1. Open `frontend/index.html` and build the layout (input, button, result area, error area)
2. Open `frontend/script.js` and work through the TODOs
3. Open `index.html` directly in your browser (or use VS Code's Live Server extension)
4. Type a city, click search, confirm it shows real data

## Step 3 — Handle edge cases
Try to break your own app before you consider it done:
- Empty input
- Misspelled city name
- No internet connection
- Backend not running (frontend should show a friendly error, not hang)

## Step 4 — Stretch goals (optional, good for resume)
- Add a loading spinner while the fetch is in flight
- Add a 5-day forecast using OpenWeatherMap's forecast endpoint
- Add geolocation ("use my location" button)
- Cache the last searched city in localStorage so it loads on page refresh
- Add a database (SQLite) to save a list of favorite cities
- Deploy: frontend to Vercel/Netlify, backend to Render/Railway

## Step 5 — Push to GitHub
Since this is a portfolio piece, initialize git, write a real README describing
what it does and how to run it, and add a screenshot once it's working. This is
often what a hiring manager actually looks at first.
