const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();

//import routes
const postRoutes = require('./routes/posts');
const employeeRoutes = require('./routes/employees');
const leaveRoutes = require('./routes/leaves');


//app middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(postRoutes);
app.use(employeeRoutes);
app.use(leaveRoutes);

const PORT = 8000;
const DB_URL = 'mongodb+srv://Amaya:Amaya123@employeemanagement.uqbpl.mongodb.net/AutoHub?retryWrites=true&w=majority';

mongoose.connect(DB_URL)
.then(() =>{
    console.log('DB connected');
})
.catch((err) => console.log('DB connection error',err));


app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
});