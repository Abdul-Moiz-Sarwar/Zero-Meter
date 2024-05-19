const blog = require('../models/blog')
const user = require('../models/accounts')

//get all blogs
const getBlogs = (req, res) => { 
    try{
        blog.find()
        .then((data) => {res.send(data);})
        .catch((err) => {console.log(err);})
    } catch (error) {
        console.error('Error fetching blogs:', error);
        res.status(500).json({ error: 'Internal Server Error during GET ALL VEHICLES' });
    }
}

//get one blog
const getBlog = async (req, res) => {
    try {
        const blogData = await blog.findOne({ _id: req.params.id});
        if (!blogData) {
            return res.status(404).json({ message: "blog not found" });
        }
        return res.status(200).json(blogData);
    } catch (error) {
        console.error('Error fetching blog:', error);
        return res.status(500).json({ error: 'Internal Server Error during GET VEHICLE' });
    }
}

//add one blog
const addBlog = async (req, res) => {
    const requiredFields = ['title', 'content'];
    const missingFields = requiredFields.filter(field => !(field in req.body));
    if (missingFields.length > 0) {
        return res.status(400).json({ error: `Missing required fields: ${missingFields.join(', ')}` });
    }

    try {
        const auth = await user.User.findOne({_id: req.id});
        if (!auth) {
            return res.status(404).json({ error: 'User not found' });
        }

        const blg = new blog();
        blg.title = req.body.title;
        blg.content = req.body.content;
        blg.author = auth.username;
        blg.datecreated = Date.now();

        const savedBlog = await blg.save();
        res.send(savedBlog);
    } catch (error) {
        console.error('Error during Add Blog:', error);
        res.status(500).json({ error: 'Internal Server Error during Add Blog' });
    }
};

//update one blog
const updateBlog = (req, res) => {
    try{
        blog.findOneAndUpdate(
            {_id:req.params.id},{
            $set: {
                title: req.body.title,
                content: req.body.content,
            }
        },{
            upsert: false
        })
        .then((data) => {res.send(data);})      
        .catch((err) => {console.log(err);})
    } catch (error) {
        console.error('Error fetching blog:', error);
        res.status(500).json({ error: 'Internal Server Error during Update Blog' });
    }
}

//delete one blog
const deleteBlog = (req, res) => {
    try{
        blog.findOneAndDelete({_id:req.params.id})
        .then((data) => {res.send(data);})
        .catch((err) => {console.log(err);})
    } catch (error) {
        console.error('Error fetching blog:', error);
        res.status(500).json({ error: 'Internal Server Error during Delete Blog' });
    }
}

module.exports.getBlog = getBlog
module.exports.getBlogs = getBlogs
module.exports.updateBlog = updateBlog
module.exports.addBlog = addBlog
module.exports.deleteBlog = deleteBlog



