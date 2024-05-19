const payment = require('../models/payment')

//get all payment
const getPayments = (req, res) => { 
    try{
        payment.find({owner:req.id})
        .then((data) => {res.send(data);})
        .catch((err) => {console.log(err);})
    } catch (error) {
        console.error('Error fetching payments:', error);
        res.status(500).json({ error: 'Internal Server Error during GET ALL PAYMENTS' });
    }
}

//get one payment
const getPayment = async (req, res) => {
    try {
        const PaymentData = await payment.findOne({ _id: req.params.id, owner:req.id});
        if (!PaymentData) {
            return res.status(404).json({ message: "payment not found" });
        }
        return res.status(200).json(PaymentData);
    } catch (error) {
        console.error('Error fetching payment:', error);
        return res.status(500).json({ error: 'Internal Server Error during GET PAYMENT' });
    }
}

const addPayment = async (req, res) => {
    const requiredFields = ['cardNumber', 'cvc', 'expire'];
    const missingFields = requiredFields.filter(field => !(field in req.body));
    if (missingFields.length > 0) {
        return res.status(400).json({ error: `Missing required fields: ${missingFields.join(', ')}` });
    }

    const { cardNumber, cvc, expire } = req.body;

    try {
        const existingPayment = await payment.findOne({ cardNumber: cardNumber });
        if (existingPayment) {
            return res.status(400).json({ message: "Card with this number already exists" });
        }

        const pay = new payment({
            owner: req.id,
            cardNumber,
            cvc,
            expire,
            datecreated: Date.now()
        });

        const savedPayment = await pay.save();
        res.send(savedPayment);
    } catch (error) {
        console.error('Error adding payment:', error);
        res.status(500).json({ error: 'Internal Server Error during Add Payment' });
    }
};

//update one payment
const updatePayment = (req, res) => {
    try{
        payment.findOneAndUpdate(
            {_id:req.params.id, owner:req.id},{
            $set: {
                cardNumber: req.body.cardNumber,
                cvc: req.body.cvc,
                expire: req.body.expire,
            }
        },{
            upsert: false
        })
        .then((data) => {res.send(data);})      
        .catch((err) => {console.log(err);})
    } catch (error) {
        console.error('Error fetching payment:', error);
        res.status(500).json({ error: 'Internal Server Error during Update Payment' });
    }
}

//delete one payment
const deletePayment = (req, res) => {
    try{
        payment.findOneAndDelete({_id:req.params.id,owner:red.id})
        .then((data) => {res.send(data);})
        .catch((err) => {console.log(err);})
    } catch (error) {
        console.error('Error fetching payment:', error);
        res.status(500).json({ error: 'Internal Server Error during Delete Payment' });
    }
}

module.exports.getPayment = getPayment
module.exports.getPayments = getPayments
module.exports.updatePayment = updatePayment
module.exports.addPayment = addPayment
module.exports.deletePayment = deletePayment



