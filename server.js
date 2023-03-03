//Loading Packages for TodoList
const express = require('express');
const app = express();

//MVC architecture
const connectDB = require('./config/database');
const homeRoutes = require('./routes/home');
const todoRoutes = require('./routes/todos');
const schoolsRoutes = require('./routes/schools');

//.env
require('dotenv').config({ path: './config/.env' });

//Connect to Database
connectDB();

//Set the server
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
app.use('/', homeRoutes);
app.use('/todos', todoRoutes);
app.use('/schools',schoolsRoutes);

//Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running! ${process.env.port}`);
});
