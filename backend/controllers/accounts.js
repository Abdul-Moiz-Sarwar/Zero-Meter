const Accounts = require('../models/accounts')
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const JWT_SECRET_KEY = "3nLp$JKl@1oP#9jKq!5&7bFg$S@%h2D"


const login = async (req, res) => {
    const { email, password } = req.body;

    //we are checking if data is complete
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

    if (existingUser.type == 'user'){
        if (existingUser.status == "blocked") {
            return res.status(400).json({message: "Your account is blocked please contact our support."})
        }
    }

    if (existingUser.type == 'dealer'){
        try{
            dl = await Accounts.Dealership.findOne({_id:existingUser.dealership, status:"verified"});
        }
        catch (err) {
            console.log(err)
        }
        if (!dl) {
            return res.status(400).json({message: "Your dealership is not yet verified."})
        }
    }



    // else{
    //     if (existingUser.status == "blocked") {
    //         return res.status(400).json({message: "Your account is blocked please contact our support."})
    //     }
    // }

    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
    if(!isPasswordCorrect){
        return res.status(400).json({message: "Invaild Email/Password"})
    }

    const token = jwt.sign({id: existingUser._id}, JWT_SECRET_KEY,{
        expiresIn: "1hr"
    });
    if (req.cookies[`${existingUser._id}`]) {
        req.cookies[`${existingUser._id}`] = ""
    }
    res.cookie(String("jwtToken"), token, {
        path:"/",
        expires: new Date(Date.now() + 1000 * 30 * 3600),
        httpOnly: true,
        sameSite: "lax",
    })
    return res.status(200).json({message: "Successfully Logged In", user: existingUser, token});
}

const signup = async (req,res) => {
    const { username, email, password, type, phone, dealershipname, registration, cnic } = req.body;

    if(type == 'user'){
        const requiredFields = ['username', 'email','password','type','phone','address','city','country']
        const missingFields = requiredFields.filter(field => !(field in req.body));
        if(missingFields.length > 0){
            return res.status(400).json({ error: `Missing required fields: ${missingFields.join(', ')}` });
        }
        //checking if unique email, username, phone and cnic number
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

        //we then create our user
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

        console.log(user)
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
        
        const requiredFields = ['username', 'email','password','type','phone','address','city','country','dealershipname','registration']
        const missingFields = requiredFields.filter(field => !(field in req.body));
        if(missingFields.length > 0){
            return res.status(400).json({ error: `Missing required fields: ${missingFields.join(', ')}` });
        }
        
        let existingUser;
        try {
            existingUser = await Accounts.Dealership.findOne({dealership:dealershipname});
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
        
        try {
            existingUser = await Accounts.User.findOne({username:(username + '@' + dealershipname)});
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
        let instagram = "none", facebook = "none"
        if(req.body.instagram){
            instagram = req.body.instagram
        }
        if(req.body.facebook){
            facebook = req.body.facebook
        }
        const dealer = new Accounts.Dealership({
            name: req.body.dealershipname,
            registration: req.body.registration,
            lat: req.body.lat,
            lng: req.body.lng,
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

        //creating admin user in Users table
        const hashedPassword = bcrypt.hashSync(password);
        const user = new Accounts.User({
            username: req.body.username + '@' + req.body.dealershipname,
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
    const cookiePairs = cookies.split(';').map(cookie => cookie.trim().split('='));
    const tokenPair = cookiePairs.find(([key]) => key === 'jwtToken');
    if (!tokenPair) {
        return res.status(404).json({ message: "Token not found" });
    }
    const token = tokenPair[1];
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
    const cookiePairs = cookies.split(';').map(cookie => cookie.trim().split('='));
    const tokenPair = cookiePairs.find(([key]) => key === 'jwtToken');
    if (!tokenPair) {
        return res.status(404).json({ message: "Token not found" });
    }
    const token = tokenPair[1];
    jwt.verify(String(token), JWT_SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(400).json({ message: "Invalid Token" });
        }
        req.id = user.id;
        next();
    });
}

const refreshToken = (req,res,next) => {
    
    const cookies = req.headers.cookie;
    if (!cookies) {
        return res.status(400).json({ message: "Couldn't find cookies" });
    }

    const prevToken = cookies.split('; ').find(cookie => cookie.startsWith('jwtToken='));
    if (!prevToken) {
        return res.status(400).json({ message: "Couldn't find token" });
    }

    const prevTokenValue = prevToken.split('=')[1];
    jwt.verify(prevTokenValue, JWT_SECRET_KEY, (err, user) => {
        if (err) {
            console.log(err);
            return res.status(403).json({ message: "Authentication failed" });
        }

        const token = jwt.sign({ id: user.id }, JWT_SECRET_KEY, {
            expiresIn: "1hr"
        });
        console.log("Re-generated Token\n", token);

        res.cookie(String("jwtToken"), token, {
            path:"/",
            expires: new Date(Date.now() + 1000 * 30 * 3600),
            httpOnly: true,
            sameSite: "lax",
        })

        req.id = user.id;
        next();
    });
}

const logout = (req, res) => {
    const cookies = req.headers.cookie;
    if (!cookies) {
        return res.status(400).json({ message: "Couldn't find cookies" });
    }

    const prevToken = cookies.split('; ').find(cookie => cookie.startsWith('jwtToken='));
    if (!prevToken) {
        return res.status(400).json({ message: "Couldn't find token" });
    }

    const prevTokenValue = prevToken.split('=')[1];
    jwt.verify(prevTokenValue, JWT_SECRET_KEY, (err, user) => {
        if (err) {
            console.log(err);
            return res.status(403).json({ message: "Authentication failed" });
        }

        res.clearCookie('jwtToken');
        return res.status(200).json({ message: "Successfully Logged Out" });
    });
};

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

const getAllDealers = async (req, res) => {
    let dealers;
    try {
        dealers = await Accounts.Dealership.find({});
    } catch (err) {
        console.error("Error fetching dealers:", err);
        return res.status(500).json({ message: "Internal server error" });
    }
    if (!dealers || dealers.length === 0) {
        return res.status(404).json({ message: "No dealers found" });
    }
    return res.status(200).json({ dealers });
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
/*const isAdmin = (req, res, next) => {
    req.isAdmin = true; 
    next(); // Call next middleware
};*/

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
// Update user function
const updateUser = async (req, res) => {
    const userId = req.id; 
    const updatedData = req.body;

    if (!userId || !updatedData) {
        return res.status(400).json({ message: "Invalid data" });
    }

    try {
        const user = await Accounts.User.findByIdAndUpdate(userId, updatedData, { new: true });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json({ user });
    } catch (error) {
        console.error('Error updating user:', error.stack || error); 
        return res.status(500).json({ message: "Error updating user", error: error.message });
    }
};

//Get all users
const getAllUsers = async (req, res) => {
    try {
        const users = await Accounts.User.find({}, '-password');
        return res.status(200).json({ users });
    } catch (error) {
        console.error('Error fetching users:', error.stack || error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

const deleteDealer = async (req, res) => {
    const dealerId = req.params.id;

    try {
        const deletedDealer = await Accounts.Dealership.findByIdAndUpdate(dealerId,{
            $set: {
                status: "unverified",
            }
        },{
            upsert: false
        });
        if (!deletedDealer) {
            return res.status(404).json({ message: "Dealer not found" });
        }
        return res.status(200).json({ message: "Dealer deleted successfully" });
    } catch (error) {
        console.error('Error deleting dealer:', error.stack || error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

const deleteUser = async (req, res) => {
    const userId = req.params.id; 

    try {
        const deletedUser = await Accounts.User.findByIdAndUpdate(userId,{
            $set: {
                status: "blocked",
            }
        },{
            upsert: false
        });
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        console.error('Error deleting user:', error.stack || error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

const enableDealer = async (req, res) => {
    const dealerId = req.params.id;

    try {
        const deletedDealer = await Accounts.Dealership.findByIdAndUpdate(dealerId,{
            $set: {
                status: "verified",
            }
        },{
            upsert: false
        });
        if (!deletedDealer) {
            return res.status(404).json({ message: "Dealer not found" });
        }
        return res.status(200).json({ message: "Dealer deleted successfully" });
    } catch (error) {
        console.error('Error deleting dealer:', error.stack || error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

const enableUser = async (req, res) => {
    const userId = req.params.id; 

    try {
        const deletedUser = await Accounts.User.findByIdAndUpdate(userId,{
            $set: {
                status: "active",
            }
        },{
            upsert: false
        });
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        console.error('Error deleting user:', error.stack || error);
        return res.status(500).json({ message: "Internal server error" });
    }
};


module.exports.getAllUsers = getAllUsers;
module.exports.updateUser = updateUser;
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
module.exports.getAllDealers = getAllDealers;
module.exports.deleteUser = deleteUser;
module.exports.deleteDealer = deleteDealer;
module.exports.enableUser = enableUser;
module.exports.enableDealer = enableDealer;