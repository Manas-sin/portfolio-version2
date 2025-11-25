import { Experience, Education } from './types';

export const PERSONAL_INFO = {
  name: "Manas Singh",
  title: "Software Development Engineer (SDE-1)",
  subtitle: "Backend & Distributed Systems | Node.js • Java • AWS • Kafka",
  email: "manassingh910@gmail.com",
  location: "New Delhi, Delhi, India",
  linkedin: "linkedin.com/in/manassinghcoder",
  portfolio: "manas-singh.vercel.app",
  summary: "I’m a Software Development Engineer (SDE-1) with experience building and scaling backend systems using Node.js, Java, and AWS. At Zupee, I contribute to optimizing real-time gaming systems (Ludo) with Kafka, Redis, and MongoDB, ensuring low-latency performance for thousands of concurrent users. I thrive on solving complex architectural problems, improving system scalability, and crafting high-performance real-time applications."
};

export const SKILLS = [
  "Node.js", "Java", "Spring Boot", "TypeScript", "AWS", 
  "Kafka", "Redis", "MongoDB", "Microservices", "System Design", 
  "REST APIs", "React.js", "Python", "Data Structures"
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    company: "Zupee",
    role: "Software Developer Engineer (SDE-1)",
    duration: "June 2025 - Present",
    location: "Gurugram",
    points: [
      "Improved backend performance for the Ludo game, handling 10K+ concurrent players with under 100ms latency using Node.js, Kafka, Redis, and MongoDB.",
      "Increased user conversion rate by 30% through system optimization and data-driven campaigns.",
      "Built a deposit-based rewards engine, boosting player retention and engagement."
    ]
  },
  {
    company: "Midas Consulting",
    role: "Software Developer",
    duration: "May 2024 - June 2025",
    location: "Noida, Uttar Pradesh, India",
    points: [
      "Designed and implemented a multi-tenant SaaS architecture serving 50+ enterprise clients with isolated databases.",
      "Deployed and managed AWS infrastructure (EC2, ALB, Auto Scaling) to ensure 99.9% system uptime.",
      "Reduced server costs by 20% after removing redundant connections and enabling horizontal scaling.",
      "Enhanced monitoring and alerting pipelines, minimizing downtime during live events.",
      "Automated data collection workflows using Python, reducing manual research time by 70%."
    ]
  },
  {
    company: "Ducat India",
    role: "Engineering Trainee",
    duration: "November 2023 - May 2024",
    location: "Noida, Uttar Pradesh, India",
    points: [
      "Trained in Full Stack Development technologies.",
      "Worked on capstone projects involving Java and Web Technologies."
    ]
  },
  {
    company: "Webloop Infotech LLP",
    role: "Software Engineer",
    duration: "June 2021 - April 2022",
    location: "Gurugram, Haryana, India",
    points: [
      "Delivered 5+ production web applications using Laravel, JavaScript, and MySQL.",
      "Enhanced backend throughput by 25% via query optimization and caching strategies.",
      "Improved frontend load time by 40% through asset compression and code refactoring."
    ]
  }
];

export const EDUCATION_DATA: Education[] = [
  {
    institution: "Amity University",
    degree: "Engineer's degree, Engineering",
    year: "June 2023 - July 2025"
  },
  {
    institution: "Guru Gobind Singh Indraprastha University",
    degree: "Bachelor in Computer Application",
    year: "2021"
  },
  {
    institution: "Dashmesh Public School",
    degree: "Schooling",
    year: "2018"
  }
];