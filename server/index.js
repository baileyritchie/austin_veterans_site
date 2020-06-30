const express = require('express');
const app = express();
const cors = require('cors');
const config = require("./config");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const PORT = 8080;
const mongoose = require('mongoose');

mongoose.set("debug",true);
mongoose.Promise = Promise;

mongoose.connect(config.mongoURI,
  {
    useNewUrlParser: true, useUnifiedTopology: true,
    useCreateIndex: true, useFindAndModify: false,
    keepAlive:true,
  })
  .then(() => console.log('Mongo DB is connected.'))
  .catch(err => console.log(err));

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());


app.listen(PORT, function(){
  console.log(`Server is running on port: ${PORT}`);
})

