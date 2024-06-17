import React from 'react';

const careerCourses = [
  {
    imgSrc: "https://tse1.mm.bing.net/th?id=OIP.MQ8bBeILW-hWaKmdFe6xrQHaEP&pid=Api&P=0&h=180",
    title: "Career Planning",
    description: "Learn to plan your career effectively and set achievable goals.",
  },
  {
    imgSrc: "https://tse4.mm.bing.net/th?id=OIP.VikWfcGCjV_CEEvZe4ZhBgHaGC&pid=Api&P=0&h=180",
    title: "Resume Building",
    description: "Create a professional resume that stands out to employers.",
  },
  {
    imgSrc: "https://tse3.mm.bing.net/th?id=OIP.WI_fTNjbE5sC9KTzdpq14wAAAA&pid=Api&P=0&h=180",
    title: "Interview Preparation",
    description: "Prepare for job interviews with confidence and ace them.",
  },
  {
    imgSrc: "https://tse2.mm.bing.net/th?id=OIP.Pp4y30Hj5_hTB-0j_oWHXgHaGn&pid=Api&P=0&h=180",
    title: "Networking Skills",
    description: "Develop effective networking skills to grow your professional network.",
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
    imgSrc: "https://tse2.mm.bing.net/th?id=OIP.dECuZEe3c4wF2eeFtXxQ0wHaEc&pid=Api&P=0&h=180",
    title: "Leadership Skills",
    description: "Develop leadership skills to advance in your career.",
  },
  {
    imgSrc: "https://tse3.mm.bing.net/th?id=OIP.Q0KS0LH_59YerqKVnoDsKwHaEv&pid=Api&P=0&h=180",
    title: "Career Transition",
    description: "Learn how to successfully transition to a new career.",
  },
];

const Career = () => (
  <div className="container mt-4">
    <h1>Career Guidance</h1>
    <p>Get insights on how to build a successful career.</p>
    <div className="row">
      {careerCourses.map((course, index) => (
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

export default Career;
