import React from 'react';

const IndividualBlogComponent = ({ blog }) => {
  return (
    <div>
      <h2>{blog.title}</h2>
      <p>Author: {blog.author}</p>
      <p>Date: {blog.date}</p>
      <p>This is the full content of the blog post.</p>
    </div>
  );
}

export default IndividualBlogComponent;
