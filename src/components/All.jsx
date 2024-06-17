import React from "react";

const courses = [
  {
    imgSrc:
      "https://tse2.mm.bing.net/th?id=OIP.FUt7aS32TroMpZldPuHHiwHaEa&pid=Api&P=0&h=180",
    title: "Full Stack Development",
    description: "Learn to build complete web applications from scratch.",
  },
  {
    imgSrc: "https://tse2.mm.bing.net/th?id=OIP.91MYfGSrNOrHXmgvOz5ewAHaHX&pid=Api&P=0&h=180",
    title: "Data Analysis",
    description: "Learn to analyze data and extract insights.",
  },
  {
    imgSrc:
      "https://www.guvi.in/blog/wp-content/uploads/2023/01/paper-analysis-2-2048x1365.jpg",
    title: "Data Science",
    description: "Dive into data analysis, machine learning, and more.",
  },
  {
    imgSrc:
      "https://tse3.mm.bing.net/th?id=OIP.Lk5BEqsDY_l96IJn1SW0ZgHaD4&pid=Api&P=0&h=180",
    title: "Cyber Security",
    description: "Understand the fundamentals of protecting online assets.",
  },
  {
    imgSrc: "https://tse1.mm.bing.net/th?id=OIP.bWgVI0kz9QeylCDg2qcpbwHaEK&pid=Api&P=0&h=180",
    title: "Deep Learning",
    description: "Explore deep learning techniques and neural networks.",
  },
  {
    imgSrc: "https://tse2.mm.bing.net/th?id=OIP.qfvMOdELh7C1RQ-__YaxvgHaEK&pid=Api&P=0&h=180",
    title: "Big Data",
    description: "Learn to handle and analyze large datasets.",
  },
  {
    imgSrc:
      "https://www.guvi.in/blog/wp-content/uploads/2022/06/8bfd01c18be1b5059bc0d7770d9dabf1.gif",
    title: "Security Operations",
    description: "Learn the essentials of managing security operations.",
  },
  {
    imgSrc: "https://tse1.mm.bing.net/th?id=OIP.X3lzZFPBQu8e6SvOu-2nPwHaEK&pid=Api&P=0&h=180",
    title: "Security Operations",
    description: "Learn the essentials of managing security operations.",
  },
  {
    imgSrc: "https://tse1.mm.bing.net/th?id=OIP.X3lzZFPBQu8e6SvOu-2nPwHaEK&pid=Api&P=0&h=180",
    title: "Application Security",
    description: "Understand how to secure web and mobile applications.",
  },
  {
    imgSrc:
      "https://www.guvi.in/blog/wp-content/uploads/2020/11/cyber-security-e1614342903477.png",
    title: "Security Management",
    description:
      "Learn about security management frameworks and best practices.",
  },
  {
    imgSrc: "https://tse3.mm.bing.net/th?id=OIP.aKM_s7B-L2f5eTk5U9SfhQHaFj&pid=Api&P=0&h=180",
    title: "Personal Branding",
    description: "Learn to build and maintain a strong personal brand.",
  },
  {
    imgSrc: "https://tse3.mm.bing.net/th?id=OIP.BFA01tfiLAWxZ3PpQy_NBgHaHa&pid=Api&P=0&h=180",
    title: "Time Management",
    description: "Master time management techniques to increase productivity.",
  }, 
  {
    imgSrc: "https://tse3.mm.bing.net/th?id=OIP.QyJagH6OYNVD7BfjPlYcxAHaE8&pid=Api&P=0&h=180",
    title: "Backend Development",
    description: "Understand server-side programming with Node.js and Express.",
  },
  {
    imgSrc: "https://tse4.mm.bing.net/th?id=OIP.4J5CpLrVh902O_xeukz5OQHaD5&pid=Api&P=0&h=180",
    title: "Database Management",
    description: "Master SQL and NoSQL databases.",
  },
  {
    imgSrc: "https://tse3.mm.bing.net/th?id=OIP.WI_fTNjbE5sC9KTzdpq14wAAAA&pid=Api&P=0&h=180",
    title: "Interview Preparation",
    description: "Prepare for job interviews with confidence and ace them.",
  },
];

const All = () => (
  <div className="container mt-4">
    <h1>All Courses</h1>
    <p>All available courses are listed here.</p>
    <div className="row">
      {courses.map((course, index) => (
        <div className="col-md-3 mb-4" key={index}>
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={course.imgSrc}
              className="card-img-top course-img"
              alt={course.title}
            />
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

export default All;
