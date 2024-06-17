import React from 'react';

const fullStackCourses = [
  {
    imgSrc: "https://www.guvi.in/blog/wp-content/uploads/2023/07/person-front-computer-working-html.jpg",
    title: "Introduction to Full Stack Development",
    description: "Get started with full stack development.",
  },
  {
    imgSrc: "https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-2048x1072.webp",
    title: "Frontend Development",
    description: "Learn HTML, CSS, JavaScript, and React.",
  },
  {
    imgSrc: "https://www.guvi.in/blog/wp-content/uploads/2023/02/1_6rDcIgFJQldloIERiUSmzw.png",
    title: "Backend Development",
    description: "Understand server-side programming with Node.js and Express.",
  },
  {
    imgSrc: "https://www.guvi.in/blog/wp-content/uploads/2023/07/html-css-collage-concept-with-person.jpg",
    title: "Database Management",
    description: "Master SQL and NoSQL databases.",
  },
  {
    imgSrc: "https://www.guvi.in/blog/wp-content/uploads/2021/05/react-768x402.jpg",
    title: "React",
    description: "Learn about CI/CD, Docker, and cloud deployment.",
  },
  {
    imgSrc: "https://tse3.mm.bing.net/th?id=OIP.42lzWZay8f4vcsmRy9YbqwHaD6&pid=Api&P=0&h=180",
    title: "FullStack Development  ",
    description: "Full stack development course and implementation.",
  },
  {
    imgSrc: "https://tse4.mm.bing.net/th?id=OIP.7zRjV4LnwHHOvpJm7lNR2gHaD4&pid=Api&P=0&h=180",
    title: "Course Development",
    description: "Essential Skills: Demonstrate proficiency in essential languages, including HTML, CSS, JavaScript, Python, or Node.js.",
  },
  {
    imgSrc: "https://tse1.mm.bing.net/th?id=OIP.rrS429oMGzaU_3MgEAFsnAHaDt&pid=Api&P=0&h=180",
    title: "Three Divisions",
    description: "Learn front-end, Back-end,Database.",
  },
];

const FullStack = () => (
  <div className="container mt-4">
    <h1>Full Stack Development</h1>
    <p>Learn to build complete web applications from scratch.</p>
    <div className="row">
      {fullStackCourses.map((course, index) => (
        <div className="col-md-3 mb-4" key={index}>
          <div className="card h-100">
            <img src={course.imgSrc} className="card-img-top" alt={course.title} />
            <div className="card-body">
              <h5 className="card-title">{course.title}</h5>
              <p className="card-text">{course.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default FullStack;
