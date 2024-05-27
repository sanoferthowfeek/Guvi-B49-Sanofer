const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const workoutRoutes = require('./routes/workoutRoutes');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/workouts', workoutRoutes);

const PORT = 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
