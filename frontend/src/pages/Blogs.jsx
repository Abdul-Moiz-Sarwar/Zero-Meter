import React, { useState } from 'react';
import BlogComponent from './BlogComponent';
import blog1 from './images/blog1.png';
import blog2 from './images/blog2.jpg';
import blog3 from './images/blog3.jpg';

const Blogs = ({ role }) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    date: '',
    summary: '',
    content: '',
  });

  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: 'Are New Cars Worth Buying?',
      author: 'John Doe',
      date: 'May 1, 2024',
      summary: 'In this post, we evaluate the pros and cons of buying new cars than second-hand ones. Find out more!',
      image: blog1,
      content: `
        <p>Hello Readers!</p>
        <p>There are some amazing new cars in Pakistan, and today we will be looking into the top 5 of them, so gear up to join us on this journey! Authored by John Doe, this thought-provoking piece navigates through the myriad of considerations that consumers face when contemplating a new automobile purchase. Through a balanced analysis of factors such as depreciation rates, warranty coverage, and technological advancements, the article aims to equip readers with the knowledge necessary to make informed decisions. By exploring both the advantages and drawbacks of opting for a new vehicle over a used alternative, the narrative provides readers with a comprehensive overview of the new car market. With its insightful commentary and pragmatic approach, "Are New Cars Worth Buying?" serves as an indispensable guide for individuals navigating the complex terrain of automotive purchasing.</p>
        <p>Happy Buying!</p>
      `,
    },
    {
      id: 2,
      title: 'Top 5 New Cars In Pakistan',
      author: 'Jane Smith',
      date: 'May 5, 2024',
      summary: 'Find out all about the top 5 new cars trending in Pakistan. Read more to know all details!',
      image: blog2,
      content: `
        <p>Hello Readers!</p>
        <p>There are some amazing new cars in Pakistan, and today we will be looking into the top 5 of them, so gear up to join us on this journey! Authored by John Doe, this thought-provoking piece navigates through the myriad of considerations that consumers face when contemplating a new automobile purchase. Through a balanced analysis of factors such as depreciation rates, warranty coverage, and technological advancements, the article aims to equip readers with the knowledge necessary to make informed decisions. By exploring both the advantages and drawbacks of opting for a new vehicle over a used alternative, the narrative provides readers with a comprehensive overview of the new car market. With its insightful commentary and pragmatic approach, "Are New Cars Worth Buying?" serves as an indispensable guide for individuals navigating the complex terrain of automotive purchasing.</p>
        <p>Happy Buying!</p>
      `,
    },
    {
      id: 3,
      title: 'Upcoming Electric Cars of Tomorrow',
      author: 'Jane Smith',
      date: 'May 15, 2024',
      summary: 'Dive into a world of electric cars as we discuss all about it in this article!',
      image: blog3,
      content: `
        <p>Hello Readers!</p>
        <p>There are some amazing new cars in Pakistan, and today we will be looking into the top 5 of them, so gear up to join us on this journey! Authored by John Doe, this thought-provoking piece navigates through the myriad of considerations that consumers face when contemplating a new automobile purchase. Through a balanced analysis of factors such as depreciation rates, warranty coverage, and technological advancements, the article aims to equip readers with the knowledge necessary to make informed decisions. By exploring both the advantages and drawbacks of opting for a new vehicle over a used alternative, the narrative provides readers with a comprehensive overview of the new car market. With its insightful commentary and pragmatic approach, "Are New Cars Worth Buying?" serves as an indispensable guide for individuals navigating the complex terrain of automotive purchasing.</p>
        <p>Happy Buying!</p>
      `,
    },
  ]);

  const handleDeleteBlog = (id) => {
    const updatedBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(updatedBlogs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    // Add the new blog to the list
    setBlogs([...blogs, { ...formData, id: blogs.length + 1 }]);
    // Reset form data and hide the form
    setFormData({
      title: '',
      author: '',
      date: '',
      summary: '',
      content: '',
    });
    setShowAddForm(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="blogs-container">
      {blogs.map((blog) => (
        <BlogComponent key={blog.id} blog={blog} role={role} onDelete={handleDeleteBlog} />
      ))}
      {role === 'admin' && (
        <>
          <button className="btn btn-primary" onClick={() => setShowAddForm(true)}>
            Add Blog
          </button>
          {showAddForm && (
            <div className="card mt-3">
              <div className="card-header">Add Blog</div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" name="title" value={formData.title} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Author</label>
                    <input type="text" className="form-control" name="author" value={formData.author} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Date</label>
                    <input type="text" className="form-control" name="date" value={formData.date} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Summary</label>
                    <input type="text" className="form-control" name="summary" value={formData.summary} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Content</label>
                    <textarea className="form-control" name="content" value={formData.content} onChange={handleChange}></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">Add</button>
                </form>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Blogs;
