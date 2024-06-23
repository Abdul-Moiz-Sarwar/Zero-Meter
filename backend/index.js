const uri = require('./secret')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const AccountRouter = require('./routes/accounts')
const VehicleRouter = require('./routes/vehicle')
const PaymentRouter = require('./routes/payment')
const InvoiceRouter = require('./routes/invoice')
const BlogRouter = require('./routes/blog')
const AdRouter = require('./routes/ad')
const recRouter = require('./routes/rec')
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));

mongoose.connect(uri.uri)
.then( () => {
    console.log("connecting to mongo DB");
    } )
.catch( (err) => {console.log(err)} )

app.use('/vehicles',VehicleRouter)
app.use('/accounts',AccountRouter)
app.use('/payments',PaymentRouter)
app.use('/invoices',InvoiceRouter)
app.use('/blogs',BlogRouter)
app.use('/ads',AdRouter)
app.use('/recs',recRouter);

app.listen(3000, () => console.log("listening on port 3000"))