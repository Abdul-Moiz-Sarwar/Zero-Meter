const Accounts = require('../models/accounts')
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const JWT_SECRET_KEY = "3nLp$JKl@1oP#9jKq!5&7bFg$S@%h2D"


const login = async (req, res) => {
    const { email, password } = req.body;

    //check if data is complete
    const requiredFields = ['email','password']
    const missingFields = requiredFields.filter(field => !(field in req.body));
    if(missingFields.length > 0){
        return res.status(400).json({ error: `Missing required fields: ${missingFields.join(', ')}` });
    }
    
    let existingUser;
    try {
        existingUser = await Accounts.User.findOne({email: email});
    } catch (err) {
        console.log(err);
    }
    if (!existingUser) {
        return res.status(400).json({message: "User not found, Please sign up."})
    }
    else{
        if (existingUser.status == "blocked") {
            return res.status(400).json({message: "Your account is blocked please contact our support."})
        }
    }

    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
    if(!isPasswordCorrect){
        return res.status(400).json({message: "Invaild Email/Password"})
    }
    if (existingUser.dealership) {
        try {
            const dealer = await Accounts.Dealership.findOne({ _id: existingUser.dealership._id, status: "verified" });
            if (!dealer) {
                return res.status(400).json({ message: "Dealership not verified." });
            }
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "Internal server error" });
        }
    }

    const token = jwt.sign({id: existingUser._id}, JWT_SECRET_KEY,{
        expiresIn: "1hr"
    });
    if (req.cookies[`${existingUser._id}`]) {
        req.cookies[`${existingUser._id}`] = ""
    }
    res.cookie(String(existingUser._id), token, {
        path:"/",
        expires: new Date(Date.now() + 1000 * 30 * 3600),
        httpOnly: true,
        sameSite: "lax",
    })
    return res.status(200).json({message: "Successfully Logged In", user: existingUser, token});
}

const signup = async (req,res) => {
    const { username, email, password, type, phone, dealership, registration, cnic } = req.body;

    if(type == 'user'){
        //check if data is complete
        const requiredFields = ['username', 'email','password','type','phone','address','city','country']
        const missingFields = requiredFields.filter(field => !(field in req.body));
        if(missingFields.length > 0){
            return res.status(400).json({ error: `Missing required fields: ${missingFields.join(', ')}` });
        }
        //check unique email, username, phone and cnic number
        let existingUser;
        try {
            existingUser = await Accounts.User.findOne({username:username});
        }
        catch (err) {
            console.log(err);
        }
        if (existingUser) {
            console.log(existingUser)
            return res.status(400).json({message: "user with this username already exists"})
        }
        try {
            existingUser = await Accounts.User.findOne({email:email});
        }
        catch (err) {
            console.log(err);
        }
        if (existingUser) {
            return res.status(400).json({message: "user with this email already exists"})
        }
        try {
            existingUser = await Accounts.User.findOne({phone:phone});
        }
        catch (err) {
            console.log(err);
        }
        if (existingUser) {
            return res.status(400).json({message: "user with this phone number already exists"})
        }
        try {
            existingUser = await Accounts.User.findOne({cnic:cnic});
        }
        catch (err) {
            console.log(err);
        }
        if (existingUser) {
            return res.status(400).json({message: "user with this cnic already exists"})
        }

        //create user
        const hashedPassword = bcrypt.hashSync(password);
        const user = new Accounts.User({
            username: req.body.username,
            email: req.body.email,
            phone: req.body.phone,
            cnic: req.body.cnic,
            type: "user",
            address: req.body.address,
            city: req.body.city,
            country: req.body.country,
            password: hashedPassword,
            status: "active"
        });
        try {
            await user.save();
        }
        catch (err) {
            console.log("Error while saving")
            console.log(err);
        }
        return res.status(201).json({message: user})

    }
    else if(type == "dealership"){
        //check if data in request is complete
        const requiredFields = ['username', 'email','password','type','phone','address','city','country','dealership','registration']
        const missingFields = requiredFields.filter(field => !(field in req.body));
        if(missingFields.length > 0){
            return res.status(400).json({ error: `Missing required fields: ${missingFields.join(', ')}` });
        }

        //check if dealership already exists
        let existingUser;
        try {
            existingUser = await Accounts.Dealership.findOne({dealership:dealership});
        }
        catch (err) {
            console.log(err);
        }
        if (existingUser) {
            return res.status(400).json({message: "dealership with this name already exists"})
        }
        try {
            existingUser = await Accounts.Dealership.findOne({registration:registration});
        }
        catch (err) {
            console.log(err);
        }
        if (existingUser) {
            return res.status(400).json({message: "dealership with this registration already exists"})
        }

        //check if user already exists
        try {
            existingUser = await Accounts.User.findOne({username:(username + '@' + dealership)});
        }
        catch (err) {
            console.log(err);
        }
        if (existingUser) {
            return res.status(400).json({message: "user with this username already exists"})
        }
        try {
            existingUser = await Accounts.User.findOne({email:email});
        }
        catch (err) {
            console.log(err);
        }
        if (existingUser) {
            return res.status(400).json({message: "user with this email already exists"})
        }
        try {
            existingUser = await Accounts.User.findOne({phone:phone});
        }
        catch (err) {
            console.log(err);
        }
        if (existingUser) {
            return res.status(400).json({message: "user with this phone number already exists"})
        }
        try {
            existingUser = await Accounts.User.findOne({cnic:cnic});
        }
        catch (err) {
            console.log(err);
        }
        if (existingUser) {
            return res.status(400).json({message: "user with this cnic already exists"})
        }
        //if not found then create a dealership set status to unverified
        let instagram = "none", facebook = "none"
        if(req.body.instagram){
            instagram = req.body.instagram
        }
        if(req.body.facebook){
            facebook = req.body.facebook
        }
        //get coordinates using maps
        let lat = 0, lng = 0;
        //create dealership
        const dealer = new Accounts.Dealership({
            name: req.body.dealership,
            registration: req.body.registration,
            lat: lat,
            lng: lng,
            instagram: instagram,
            facebook: facebook,
            status: "unverified"
        })
        try {
            await dealer.save();
        }
        catch (err) {
            console.log(err);
        }

        //create admin user in Users table
        const hashedPassword = bcrypt.hashSync(password);
        const user = new Accounts.User({
            username: req.body.username + '@' + req.body.dealership,
            email: req.body.email,
            phone: req.body.phone,
            cnic: req.body.cnic,
            type: "dealer",
            address: req.body.address,
            city: req.body.city,
            country: req.body.country,
            dealership: dealer,
            password: hashedPassword,
            status: "active"
        });
        try {
            await user.save();
        }
        catch (err) {
            console.log(err);
        }
        return res.status(201).json({message: user})
    }
    else{
        return res.status(400).json({message: "invalid type"})
    }
}

const verifyToken = (req, res, next) => {
    const cookies = req.headers.cookie;
    if (!cookies) {
        return res.status(404).json({ message: "Cookies not found" });
    }
    const token = cookies.split('=')[1];
    if (!token) {
        return res.status(404).json({ message: "Token not found" });
    }
    jwt.verify(String(token), JWT_SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(400).json({ message: "Invalid Token" });
        }
        req.id = user.id;
        next();
    });
}

const verifyRefresh = (req,res) => {   
        
    const cookies = req.headers.cookie;
    if (!cookies) {
        return res.status(404).json({ message: "Cookies not found" });
    }
    const token = cookies.split('=')[1];
    if (!token) {
        return res.status(404).json({ message: "Token not found" });
    }
    jwt.verify(String(token), JWT_SECRET_KEY, (err,user) => {
        if (err){
            return res.status(400).json({message: "Invalid Token"})
        }
        req.id = user.id;
    });
    return res.status(200).json({ message: "Token Refreshed and Verified Successfully" });
}

const refreshToken = (req,res,next) => {
    
    const cookies = req.headers.cookie;
    if (!cookies) {
        return res.status(400).json({message: "Couldn't find cookies"})
    }
    const prevToken = cookies.split('=')[1];
    if (!prevToken) {
        return res.status(400).json({message: "Couldn't find token"})
    }
    jwt.verify(String(prevToken), JWT_SECRET_KEY, (err,user) => {
        if (err){
            console.log(err);
            return res.status(403).json({message: "Authentication failed"});
        }
        res.clearCookie(`${user.id}`);
        req.cookies[`${user.id}`] = "";

        const token = jwt.sign({id: user.id}, JWT_SECRET_KEY, {
            expiresIn: "1hr"
        });
        console.log("Re-generated Token\n", token);
        res.cookie(String(user.id), token, {
            path:"/",
            expires: new Date(Date.now() + 1000 * 30),
            httpOnly: true,
            sameSite: "lax",
        })
        req.id = user.id;
    });
    next();
}

const logout = (req, res) => {
    const cookies = req.headers.cookie;
    const prevToken = cookies.split('=')[1];
    if (!prevToken) {
        return res.status(400).json({message: "Couldn't find token"})
    }
    jwt.verify(String(prevToken), JWT_SECRET_KEY, (err,user) => {
        if (err){
            console.log(err);
            return res.status(403).json({message: "Authentication failed"});
        }
        res.clearCookie(`${user.id}`);
        req.cookies[`${user.id}`] = "";
        return res.status(200).json({message: "Successfully Logged Out"});
    });
    
}

const getUser = async(req, res) => {
    let user;
    try{
        user = await Accounts.User.findById(req.id, "-password");
    } catch (err) {
        return new Error(err)
    }
    if (!user) {
        return res.status(404).json({message: "User not found"})
    }
    return res.status(200).json({user});
}

const isDealer = (req, res, next) => {
    Accounts.User.findOne({_id: req.id, type: "dealer"}, "-password")
        .then((data) => {
            if (data) {
                next();
            } else {
                return res.status(403).json("Unauthorized Access");
            }
        })
        .catch((err) => {
            console.error(err);
            return res.status(500).json("Internal Server Error");
        });
}

const isAdmin = (req, res, next) => {
    Accounts.User.findOne({_id: req.id, type: "admin"}, "-password")
        .then((data) => {
            if (data) {
                next();
            } else {
                return res.status(403).json("Unauthorized Access");
            }
        })
        .catch((err) => {
            console.error(err);
            return res.status(500).json("Internal Server Error");
        });
}

const isUser = (req, res, next) => {
    Accounts.User.findOne({_id: req.id, type: "user"}, "-password")
        .then((data) => {
            if (data) {
                next();
            } else {
                return res.status(403).json("Unauthorized Access");
            }
        })
        .catch((err) => {
            console.error(err);
            return res.status(500).json("Internal Server Error");
        });
};

module.exports.logout = logout;
module.exports.signup = signup;
module.exports.login = login;
module.exports.verifyToken = verifyToken;
module.exports.refreshToken = refreshToken;
module.exports.verifyRefresh = verifyRefresh;
module.exports.getUser = getUser;
module.exports.isAdmin = isAdmin;
module.exports.isUser = isUser;
module.exports.isDealer = isDealer;