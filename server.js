//import express framework
const express = require('express');
const connectDB = require('./config/db');

const app = express();
connectDB();

//parse incoming requests in req.body using querystring
app.use(express.json({extended: false}));

//API running
app.get('/', (req, res) => res.send('API Running'));

//routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/authentication', require('./routes/api/authentication'));
// app.use('/api/profile', require('./routes/api/profile'));
// app.use('/api/posts', require('./routes/api/posts'));

//heroku will assign port from environment, run locally use 5000
const PORT = process.env.PORT || 5000;

//Binds and listens for connections on PORT. Output port number
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));