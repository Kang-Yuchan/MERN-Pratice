import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();
// import routes
import userRoutes from './routes/user';

//app
const app = express();
const PORT = process.env.PORT || 3000;

//DB
mongoose
	.connect(process.env.DATABASE, {
		useNewUrlParser: true,
		useCreateIndex: true
	})
	.then(() => console.log('DB Connected!'));

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);

//routes middleware
app.use('/', userRoutes);
app.listen(PORT, handleListening);
