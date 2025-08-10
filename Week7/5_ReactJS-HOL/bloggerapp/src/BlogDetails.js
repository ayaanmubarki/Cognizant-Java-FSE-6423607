import React from "react";

function BlogDetails({ blogs }) {
  return (
    <div>
      <h2>Blog Details</h2>
      <ul>
        {blogs.map((blog) => (
          <div key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default BlogDetails;
