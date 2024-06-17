import React from 'react';

const dataScienceCourses = [
  {
    imgSrc: "https://www.guvi.in/blog/wp-content/uploads/2023/01/paper-analysis-2-2048x1365.jpg",
    title: "Introduction to Data Science",
    description: "Get started with data science fundamentals.",
  },
  {
    imgSrc: "https://www.guvi.in/blog/wp-content/uploads/2023/07/image-4.png",
    title: "Data Analysis",
    description: "Learn to analyze data and extract insights.",
  },
  {
    imgSrc: "https://www.guvi.in/blog/wp-content/uploads/2023/08/feature-image-Best-Data-Science-Online-Courses-for-Beginners.webp",
    title: "Data Visualization",
    description: "Master data visualization techniques using tools like Python and R.",
  },
  {
    imgSrc: "https://www.guvi.in/blog/wp-content/uploads/2023/08/How-Long-Would-It-Take-to-Learn-Data-Science-2048x1072.png",
    title: "Machine Learning",
    description: "Understand machine learning algorithms and their applications.",
  },
  {
    imgSrc: "https://www.guvi.in/blog/wp-content/uploads/2022/06/Your-paragraph-text-2048x1024.png",
    title: "Artificial Intelligence",
    description: "Dive deep into AI concepts and their real-world applications.",
  },
  {
    imgSrc: "https://www.guvi.in/blog/wp-content/uploads/2022/02/2.-AI-vs-ML-vs-Data-Science_-2048x1072.png",
    title: "Deep Learning",
    description: "Explore deep learning techniques and neural networks.",
  },
  {
    imgSrc: "https://www.guvi.in/blog/wp-content/uploads/2022/06/5.-data-science-2048x1072.png",
    title: "Big Data",
    description: "Learn to handle and analyze large datasets.",
  },
  {
    imgSrc: "https://www.guvi.in/blog/wp-content/uploads/2023/07/feature-image-Best-Websites-to-Learn-Data-Science-1.webp",
    title: "Data Engineering",
    description: "Understand the principles of data engineering and ETL processes.",
  },
];

const DataScience = () => (
  <div className="container mt-4">
    <h1>Data Science</h1>
    <p>Dive into data analysis, machine learning, and more.</p>
    <div className="row">
      {dataScienceCourses.map((course, index) => (
        <div className="col-md-3 mb-4" key={index}>
          <div className="card h-100">
            <img src={course.imgSrc} className="card-img-top course-img" alt={course.title} />
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

export default DataScience;
