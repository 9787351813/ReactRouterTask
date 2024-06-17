import React from 'react';


const cyberSecurityCourses = [
  {
    imgSrc: "https://tse3.mm.bing.net/th?id=OIP.Lk5BEqsDY_l96IJn1SW0ZgHaD4&pid=Api&P=0&h=180",
    title: "Introduction to Cyber Security",
    description: "Understand the fundamentals of protecting online assets.",
  },
  {
    imgSrc: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
    title: "Network Security",
    description: "Learn to secure networks and prevent cyber attacks.",
  },
  {
    imgSrc: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
    title: "Ethical Hacking",
    description: "Master the skills of ethical hacking and penetration testing.",
  },
  {
    imgSrc: "https://tse2.mm.bing.net/th?id=OIP.duF1PrbDKhPMz0l-tuv9AwHaHa&pid=Api&P=0&h=180",
    title: "Cryptography",
    description: "Learn about encryption techniques and secure communication.",
  },
  {
    imgSrc: "https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners.webp",
    title: "Incident Response",
    description: "Understand how to respond to and mitigate cyber incidents.",
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
    imgSrc: "https://tse2.mm.bing.net/th?id=OIP.0UcpCX47mTRsYMQpTmn3yAHaEd&pid=Api&P=0&h=180",
    title: "Security Management",
    description: "Learn about security management frameworks and best practices.",
  },
];

const CyberSecurity = () => (
  <div className="container mt-4">
    <h1>Cyber Security</h1>
    <p>Understand the fundamentals of protecting online assets.</p>
    <div className="row">
      {cyberSecurityCourses.map((course, index) => (
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

export default CyberSecurity;
