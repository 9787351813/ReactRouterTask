import React from 'react';

const dataScienceCourses = [
  {
    imgSrc: "https://tse4.mm.bing.net/th?id=OIP.z_QZFOvDbcpP7NyCXnWMJAHaEo&pid=Api&P=0&h=180",
    title: "Introduction to Data Science",
    description: "Get started with data science fundamentals.",
  },
  {
    imgSrc: "https://tse2.mm.bing.net/th?id=OIP.91MYfGSrNOrHXmgvOz5ewAHaHX&pid=Api&P=0&h=180",
    title: "Data Analysis",
    description: "Learn to analyze data and extract insights.",
  },
  {
    imgSrc: "https://www.guvi.in/blog/wp-content/uploads/2023/08/feature-image-Best-Data-Science-Online-Courses-for-Beginners.webp",
    title: "Data Visualization",
    description: "Master data visualization techniques using tools like Python and R.",
  },
  {
    imgSrc: "https://tse2.mm.bing.net/th?id=OIP.swx1cPx6ZgFcIs5C01PBnwHaEK&pid=Api&P=0&h=180",
    title: "Machine Learning",
    description: "Understand machine learning algorithms and their applications.",
  },
  {
    imgSrc: "https://tse1.mm.bing.net/th?id=OIP.qMlD84OpJlfClBNXIc5huQHaFj&pid=Api&P=0&h=180",
    title: "Artificial Intelligence",
    description: "Dive deep into AI concepts and their real-world applications.",
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
