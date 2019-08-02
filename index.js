const express = require('express');
const app = express();
const logger = require('./middleware/logger');


// Init middleware
app.use(logger);

// Body parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// Members API Routes
app.use('/api/members', require('./routes/api/members'));

const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => console.log('Server started on port '+PORT));