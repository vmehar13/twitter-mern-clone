const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

//MiddleWare----------------------------------------------
app.use(cors());

//Mongoose-Connection--------------------------------------
const mongoURI = process.env.mongoURI;
const mongoConnectionEssentials = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
mongoose.connect(mongoURI, mongoConnectionEssentials, (error) => {
    if (error) {
        return console.log(error);
    }
    return console.log("Connection to MongoDB Sucessfull");
});
//-----------Routes-------------------------------------

app.use(require('./Route/Auth/userAuth'));

//Server-Config-&-Connection----------------------------

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server Started at PORT ${PORT}`);
})
