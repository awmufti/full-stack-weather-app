// server.js
// This is the entry point for your backend. It should:
//   1. Load environment variables
//   2. Create an Express app
//   3. Enable CORS so your frontend (running on a different port) can call it
//   4. Enable JSON parsing for request bodies
//   5. Mount your weather routes
//   6. Start listening on a port

// TODO 1: Import express, cors, and dotenv, and call dotenv's config function
//   (this loads variables from your .env file into process.env)
// DONE
import express from 'express'
import cors from 'cors'
import 'dotenv/config'
// TODO 2: Import your weather router from ./routes/weather.js
// DONE
import weatherRouter from './routes/weather.js'

// TODO 3: Create the express app: const app = express();
// DONE
const app = express();

// TODO 4: Add middleware
// DONE
app.use(cors());
app.use(express.json());

// TODO 5: Mount the weather router at a base path, e.g.:
// DONE
app.use('/api/weather', weatherRouter);

// TODO 6: Add a simple health check route so you can confirm the server is up:
// DONE
app.get('/', (req, res) => res.send('Weather API is running'));

// TODO 7: Start the server
// DONE
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Hint: run this with `npm run dev` (after npm install) and visit
// http://localhost:5000 in your browser to confirm you see your health check message.
