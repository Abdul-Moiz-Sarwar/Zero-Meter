const blog = require('../models/blog')

//get all vehicles
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

//get one vehicle
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

//add one vehicle
const addBlog = (req, res) => {
    const requiredFields = ['title', 'body'];
    const missingFields = requiredFields.filter(field => !(field in req.body));
    if(missingFields.length > 0){
        return res.status(400).json({ error: `Missing required fields: ${missingFields.join(', ')}` });
    }
    var blg = new blog()
    blg.writer = req.id
    blg.title = req.body.title
    blg.body = req.body.body
    blg.datecreated = Date.now()
    try{
        blg.save()
        .then((data) => {res.send(data);})
        .catch((err) => {console.log(err);})
    } catch (error) {
        console.error('Error fetching vehicle:', error);
        res.status(500).json({ error: 'Internal Server Error during Add Blog' });
    }
}

//update one vehicle
const updateBlog = (req, res) => {
    try{
        blog.findOneAndUpdate(
            {_id:req.params.id},{
            $set: {
                title: req.body.title,
                body: req.body.body,
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

//delete one vehicle
const deleteBlog = (req, res) => {
    try{
        blog.findOneAndDelete({_id:req.params.id})
        .then((data) => {res.send(data);})
        .catch((err) => {console.log(err);})
    } catch (error) {
        console.error('Error fetching blog:', error);
        res.status(500).json({ error: 'Internal Server Error during GET ALL VEHICLES' });
    }
}

module.exports.getBlog = getBlog
module.exports.getBlogs = getBlogs
module.exports.updateBlog = updateBlog
module.exports.addBlog = addBlog
module.exports.deleteBlog = deleteBlog



