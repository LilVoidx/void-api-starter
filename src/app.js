const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

const error = require('./middlewares/error.middleware');
const { CLIENT_URL } = require('./config/env.config');

// Import base routers
const userRouter = require('./routes/user.route');

const app = express();

// init Middleware
app.use(morgan('dev'));
app.use(helmet());
app.use(cors({ origin: CLIENT_URL, credentials: true }));
app.use(express.json());

// init base Routes
app.use('/api/users', userRouter);

// index route
app.get('/', (req, res) => {
  res.json({
    message: 'hello world',
  });
});

app.use(error.notFound);
app.use(error.errorHandler);

module.exports = app;
