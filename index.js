const express = require('express');
const app = express()
const port = process.env.PORT || 5656

require('dotenv').config();
const mongoose = require('mongoose')
const { MONGOURI } = require('./src/config/db.config');


//----------------------------------------------------
const users = require('./src/routes/user.route')

//---------------------------------------------------

app.use("/api/v1", users);


// atlas conncetion
mongoose.connect(MONGOURI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(() => console.log("connected to mongodb")).catch((err) => console.log(err))


/* Node server start with PORT:5656 */
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})