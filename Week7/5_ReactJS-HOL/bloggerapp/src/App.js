import React, { useState } from "react";
import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";
import "./App.css";

function App() {
  const [showBooks, setShowBooks] = useState(true);
  const [showBlogs, setShowBlogs] = useState(false);
  const [showCourses, setShowCourses] = useState(false);

  const books = [
    { id: 1, bname: "React Basics", price: 500 },
    { id: 2, bname: "Advanced JS", price: 800 },
    { id: 3, bname: "Node.js Guide", price: 600 }
  ];

  const blogs = [
    { id: 1, title: "React Tips", content: "Learn JSX, hooks, and state." },
    { id: 2, title: "Node Tricks", content: "Master async programming." }
  ];

  const courses = [
    { id: 1, name: "Frontend Development", duration: "3 months" },
    { id: 2, name: "Backend Development", duration: "4 months" }
  ];

  // Element variable example
  let content;
  if (showBooks) {
    content = <BookDetails books={books} />;
  } else if (showBlogs) {
    content = <BlogDetails blogs={blogs} />;
  } else if (showCourses) {
    content = <CourseDetails courses={courses} />;
  } else {
    content = <p>Please select a category</p>;
  }

  return (
    <div className="App">
      <h1>Blogger App</h1>
      <div>
        <button onClick={() => { setShowBooks(true); setShowBlogs(false); setShowCourses(false); }}>Show Books</button>
        <button onClick={() => { setShowBooks(false); setShowBlogs(true); setShowCourses(false); }}>Show Blogs</button>
        <button onClick={() => { setShowBooks(false); setShowBlogs(false); setShowCourses(true); }}>Show Courses</button>
      </div>

      <hr />

      {/* Conditional rendering using element variable */}
      {content}

      <hr />

      {/* Conditional rendering using ternary operator */}
      {showBooks ? <BookDetails books={books} /> : null}

      {/* Conditional rendering using && operator */}
      {showBlogs && <BlogDetails blogs={blogs} />}
      {showCourses && <CourseDetails courses={courses} />}
    </div>
  );
}

export default App;
