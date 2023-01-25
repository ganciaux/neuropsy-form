const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const goalsRoutes = require('./routes/goalsRoutes');
const connectDB = require('./config/db');
const port = process.env.PORT || 5001;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', goalsRoutes);

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
