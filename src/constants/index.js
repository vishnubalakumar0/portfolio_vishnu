import { title } from "motion/react-client";
import project1 from "../assets/projects/Project1.png";
import project2 from "../assets/projects/Project2.png";
import project3 from "../assets/projects/Project3.png";
import project4 from "../assets/projects/Project4.png";

export const HERO_CONTENT = `Fueled by continuous learning and technical craftsmanship, I'm a full stack developer focused on building smooth, stable, and intuitive web applications with React, Tailwind CSS, JavaScript, Node.js, and databases like MySQL, PostgreSQL, and MongoDB. I also work with data science tools like Python, Power BI, and Tableau to turn data into insights that guide smarter decisions.
`;

export const ABOUT_TEXT = `I started with a curiosity about how websites work, and that curiosity evolved into a solid foundation in full stack development. Today, I build smooth and scalable web applications using React, Tailwind CSS, JavaScript, Node.js, and databases like MySQL, PostgreSQL, and MongoDB — always aiming for a clean user experience backed by reliable engineering. My journey also led me into data science, where I work with Python, Pandas, NumPy, Power BI, and Tableau to analyze information, uncover patterns, and turn raw data into meaningful insights that support confident decision-making.
`;

export const EDUCATION = [
  {
    year: "2024 - Present",
    course: "M.Sc Data Science",
    college: "Nehru Arts and Science College",
    description: `Currently pursuing my Master's in Data Science with a focus on data analytics, visualization, database management, and Python-based development. Building projects that connect full stack development with data-driven insights.`,
    technologies: [
      "Data Visulization",
      "Data Analytics",
      "Machine Learning Models",
      "PowerBi",
      "Tableau",
    ],
  },
  {
    year: "2021 - 2024",
    course: "B.Sc Information Technology",
    college: "Nehru Arts and Science College",
    description: `Completed my Bachelor’s degree in Information Technology. Learned fundamentals of software development, programming, databases, and web technologies. Built academic projects and gained confidence in building real-world applications.`,
    technologies: ["React.js", "MySQL", "CSS", "HTML", "JavaScript"],
  },
];

export const PROJECTS = [
  {
    title: "Proxy-Free Attendance System using RFID",
    image: project1,
    description:
      "Attendance system using RFID, facial recognition, and WiFi geofencing to prevent proxy attendance. Powered by ESP32 IoT hardware with a React login app and SQL storage.",
    technologies: [
      "React",
      "OpenCV",
      "RFID RC522",
      "ESP32 IoT",
      "WiFi Geo",
      "REST API",
      "SQL",
    ],
  },
  {
    title: "Smart Timetable Generator",
    image: project2,
    description:
      "Automated timetable platform with staff & student login, class conflict handling, and PDF export for schedules using modern UI and real-time data.",
    technologies: ["React", "Firebase", "Tailwind", "jsPDF", "JavaScript"],
  },
  {
    title: "Anomaly Detection of Solar Panels with YOLO",
    image: project3,
    description:
      "Automated defect detection on solar panels using YOLOv8n to identify cracks, dust, and hotspots for faster maintenance and reduced manual inspection.",
    technologies: ["YOLOv8n", "Python", "OpenCV", "DL", "CV"],
  },
  {
    title: "Power BI Sales Dashboard",
    image: project4,
    description:
      "Interactive KPI dashboard for business insights with revenue trends, region reports, and drill-down analytics for decision-making.",
    technologies: ["Power BI", "Excel", "DAX", "Data Modeling"],
  },
];

export const CONTACT = {
  address: "Coimbatore, Tamil Nadu, India",
  phoneNo: "+12 4555 666 00 ",
  email: "vishnub9842@gmail.com",
};

export const CERTIFICATE = [
  {
    title: "Data Science Intern",
    company: "Christ Infotech - Pune",
    date: "Mar 2025",
    description:
      "Built a YOLO-based Solar Panel Anomaly Detection system to detect cracks, hotspots, and soiling from aerial images using deep learning.",
  },
  {
    title: "App Development With Flutter",
    company: "Metatron Cube Solutions",
    date: "Dec 2025",
    description:
      "Built cross-platform mobile applications with Flutter, Firebase integration and UI/UX fundamentals.",
  },

  {
    title: "Carrer Essentials in Data Analysis",
    company: "Microsoft & LinkedIn Learning",
    date: "May 2025",
    description:
      "Developed Excel and Power BI skills for real-world business analytics, KPI tracking, dashboards and insights.",
  },

  {
    title: "Computer Vision Specialization",
    company: "DeepLearning.AI - Coursera",
    date: "May 2025",
    description:
      "Learned advanced image classification, detection, segmentation and deployed CV models with TensorFlow.",
  },
  {
    title: "Data Science and Analytics",
    company: "HP Life Foundation",
    date: "Apr 2025",
    description:
      "Gained hands-on training in data analysis, visualization, statistical modeling and reporting for decision making.",
  },

  {
    title: "Front-End Developer",
    company: "IBM Skills Network - Coursera",
    date: "Aug 2025",
    description:
      "Trained in building responsive front-end applications using React, modern JavaScript, and REST API integration with industry-standard development workflows.",
  },
];
