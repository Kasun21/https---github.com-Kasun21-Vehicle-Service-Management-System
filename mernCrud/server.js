const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();


//import routes
const postRoutes = require('./routes/posts');

//app middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(postRoutes);

const PORT = 8000;
const DB_URL = 'mongodb+srv://KasunR:Kasun12345@customer-vehicle-cluste.p9unn.mongodb.net/Vehicle-Management-System?retryWrites=true&w=majority'

mongoose.connect(DB_URL)
 .then(() => {
     console.log('DB connected');
})
 .catch((err) => console.log('DB conncetion' ,err ));

app.listen(PORT, () =>{
    console.log(`App is running on ${PORT}`);
});

