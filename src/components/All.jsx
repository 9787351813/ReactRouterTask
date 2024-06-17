import React from "react";

const courses = [
  {
    imgSrc:
      "https://www.guvi.in/blog/wp-content/uploads/2023/07/person-front-computer-working-html.jpg",
    title: "Full Stack Development",
    description: "Learn to build complete web applications from scratch.",
  },
  {
    imgSrc:
      "https://tse3.mm.bing.net/th?id=OIP.BFA01tfiLAWxZ3PpQy_NBgHaHa&pid=Api&P=0&h=180",
    title: "Time Management",
    description: "Master time management techniques to increase productivity.",
  },
  {
    imgSrc:
      "https://www.guvi.in/blog/wp-content/uploads/2023/01/paper-analysis-2-2048x1365.jpg",
    title: "Data Science",
    description: "Dive into data analysis, machine learning, and more.",
  },
  {
    imgSrc:
      "https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-2048x1152.png",
    title: "Cyber Security",
    description: "Understand the fundamentals of protecting online assets.",
  },
  {
    imgSrc:
      "https://www.guvi.in/blog/wp-content/uploads/2022/02/2.-AI-vs-ML-vs-Data-Science_-2048x1072.png",
    title: "Deep Learning",
    description: "Explore deep learning techniques and neural networks.",
  },
  {
    imgSrc:
      "https://www.guvi.in/blog/wp-content/uploads/2022/06/5.-data-science-2048x1072.png",
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
    imgSrc:
      "https://www.guvi.in/blog/wp-content/uploads/2023/08/How-Long-Would-It-Take-to-Learn-Data-Science-2048x1072.png",
    title: "Machine Learning",
    description:
      "Understand machine learning algorithms and their applications.",
  },
  {
    imgSrc:
      "https://www.guvi.in/blog/wp-content/uploads/2021/03/Blog-9-768x402.png",
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
    imgSrc:
      "https://tse1.mm.bing.net/th?id=OIP.MQ8bBeILW-hWaKmdFe6xrQHaEP&pid=Api&P=0&h=180",
    title: "Career Guidance",
    description: "Get insights on how to build a successful career.",
  },
  {
    imgSrc: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
    title: "Ethical Hacking",
    description: "Master the skills of ethical hacking and penetration testing.",
  },
  {
    imgSrc:
      "https://www.guvi.in/blog/wp-content/uploads/2023/07/html-css-collage-concept-with-person.jpg",
    title: "Database Management",
    description: "Master SQL and NoSQL databases.",
  },
  {
    imgSrc:
      "https://www.guvi.in/blog/wp-content/uploads/2021/05/react-768x402.jpg",
    title: "React",
    description: "Learn about CI/CD, Docker, and cloud deployment.",
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
