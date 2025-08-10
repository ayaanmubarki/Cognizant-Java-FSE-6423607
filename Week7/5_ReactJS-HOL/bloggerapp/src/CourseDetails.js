import React from "react";

function CourseDetails({ courses }) {
  return (
    <div>
      <h2>Course Details</h2>
      <ul>
        {courses.map((course) => (
          <div key={course.id}>
            <h3>{course.name}</h3>
            <p>Duration: {course.duration}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default CourseDetails;
