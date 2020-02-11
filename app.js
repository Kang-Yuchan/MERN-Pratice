import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);
const handleGet = (req, res) => res.send('hello from node');

app.get('/', handleGet);
app.listen(PORT, handleListening);
