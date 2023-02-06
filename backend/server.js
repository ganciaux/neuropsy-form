const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const goalsRoutes = require('./routes/goalsRoutes');
const usersRoutes = require('./routes/usersRoutes');
const clientsRoutes = require('./routes/clientsRoutes');
const connectDB = require('./config/db');
const port = process.env.PORT || 5001;
const cors = require('cors');

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    origin: 'http://localhost:3000',
  }),
);

app.use('/api/goals', goalsRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/clients', clientsRoutes);

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
