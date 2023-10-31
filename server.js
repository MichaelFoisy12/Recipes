const PORT = 8000;
import dotenv from 'dotenv';
import express, { response } from 'express';
import cors from 'cors';
import fetch from 'node-fetch'


dotenv.config();

const app = express();

app.use(cors());

app.get('/recipes', async (req, res) => {

     const { q } = req.query

    const response = await fetch(`https://api.edamam.com/search?q=${encodeURIComponent(q)}&app_id=${process.env.VITE_API_ID}&app_key=${process.env.VITE_API_KEY}`);
    const data =  await response.json(); // Await for any external request. For data that doesnt come back instantly
    res.json(data)     
});

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
