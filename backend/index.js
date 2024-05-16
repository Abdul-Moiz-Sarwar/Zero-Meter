const uri = require('./secret')
const express = require('express')
const mongoose = require('mongoose')
const VehicleRouter = require('./routes/vehicle')
const AccountRouter = require('./routes/accounts')
const BlogRouter = require('./routes/blog')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));

mongoose.connect(uri)
.then( () => {
    console.log("connecting to mongo DB");
    } )
.catch( (err) => {console.log(err)} )

app.use('/vehicles',VehicleRouter)
app.use('/accounts',AccountRouter)
app.use('/blogs',BlogRouter)

app.listen(3000, () => console.log("listening on port 3000"))