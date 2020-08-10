const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
require('dotenv').config()
const userRoute = require('./routes/users');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => console.log('Mongo db connected'))
    .catch(err => console.log(err));

app.use('/api/users', userRoute);


if(process.env.NODE_ENV === 'production') {
        // Set static folder
        app.use(express.static('client/build'));
    
        app.get('*', (req, res) => {
            res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
        })
    }

const port = process.env.PORT || 8080;    
app.listen(port, () => {
    console.log(`App listening at port ${port}`);
})

