import { Github, Mail, Linkedin, Download, Award, ExternalLinkIcon} from "lucide-react";
import myPhoto from "../assets/photo.jpeg"; // Your photo path
import myResume from "../assets/cv.pdf"; // Your resume PDF path
import logo from "../assets/logo.png";
import cisco from "../assets/cisco.png";
import common from "../assets/commonwealth.png"
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaPhp,
  FaJava,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiCplusplus,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiSpringboot,
  SiMysql,
  SiMongodb,
  SiPostman,
} from "react-icons/si";

import { MdPeople } from "react-icons/md";

export default function Portfolio() {
  const achievements = [
    {
      title: "Student at University of Jaffna",
      description: "A motivated BSc.(Hons) Information Technology student at the University of Jaffna with CGPA 3.72",
      icon: <Award className="w-6 h-6 text-yellow-400" />,
      image:<img
            src={logo}
            alt="Sanduni Nisansala"
            className="w-32 h-32 mb-8 mx-auto rounded-full object-cover border-1 border-yellow-500"
          />
    },
    {
      title: " JavaScript Essentials 1(JSE) course ",
      description: "Successfully completed JavaScript Essentials 1(JSE) course and provided by Cisco Networking Academy in collaboration with OpenEDG JavaScript Institute.",
      icon: <Award className="w-6 h-6 text-yellow-400" />,
      image:<img
            src={cisco}
            alt="Sanduni Nisansala"
            className="w-32 h-32 mb-8 mx-auto rounded-full object-cover border-1 border-yellow-500"
          />
    },
    {
      title: "Programming Essentials in Python course",
      description: " Successfully completed PCAP: Programming Essentials in Python course, provided by Cisco Networking Academy in collaboration with OpenEDG Python Institute",
      icon: <Award className="w-6 h-6 text-yellow-400" />,
      image:<img
            src={cisco}
            alt="Sanduni Nisansala"
            className="w-32 h-32 mb-8 mx-auto rounded-full object-cover border-1 border-yellow-500"
          />
    },
    {
      title: "Introduction AI for Youth",
      description: "Successfully completed the training course on Introduction to AI for Youth provided by The CommonWealth and Intel",
      icon: <Award className="w-6 h-6 text-yellow-400" />,
       image:<img
            src={common}
            alt="Sanduni Nisansala"
            className="w-32 h-32 mb-8 mx-auto rounded-full object-cover border-1 border-yellow-500"
          />
    }
  ];

  const projects = [
    {
      title: "AgroGo(Group Project)",
      description: "AgroGo is a full stack web application featuring secure user authentication(registration,login,password management) and e-commerce modules. It integrates third party weather APIs to deliver real-time weather forecasts. ",
      technologies: "React.js , Express.js, Node.js , MongoDB, REST APIs, GIT",
      link: 
      <a
            href="https://github.com/Ravindu156/react-agriculture-app.git"
            target="blank"
            rel = "noopener noreferrer"
            //className="inline-flex items-center gap-2 rounded-lg bg-yellow-500 text-gray-900 px-4 py-2"
            className="mt-4 inline-flex items-center gap-2 bg-yellow-500 text-gray-900 font-semibold px-6 py-2 rounded-full hover:bg-yellow-400 transition"
          >
          <Github size={18}/>
          Go to  GitHub
      <ExternalLinkIcon size = {16}/></a> 
    },
    {
      title: "LitLoom(Individual)",
      description: "Litloom is a full stack book e-commerce application developed using React for frontend andSpringBoot for backend, using MySQL as the database. It provides user authentication,book catalog management, and order preprocessing ",
      technologies:"React.js, Spring Boot, Java, MySQL ,REST APIs, GIT",
       link: 
      <a
            href="https://github.com/Sanduni0601/litloom-ecommerce.git"
            target="blank"
            rel = "noopener noreferrer"
            //className="inline-flex items-center gap-2 rounded-lg bg-yellow-500 text-gray-900 px-4 py-2"
            className="mt-4 inline-flex items-center gap-2 bg-yellow-500 text-gray-900 font-semibold px-6 py-2 rounded-full hover:bg-yellow-400 transition"
          >
          <Github size={18}/>
          Go to  GitHub
      <ExternalLinkIcon size = {16}/></a> 
    },
    {
      title: "Questionnaire application(Individual)",
      description: "A stage based questionnaire application where users progress through levels by answering questions correctly",
      technologies: "React.js, JavaScript, CSS",
      link: 
      <a
            href="https://github.com/Sanduni0601/quiz-app.git"
            target="blank"
            rel = "noopener noreferrer"
            //className="inline-flex items-center gap-2 rounded-lg bg-yellow-500 text-gray-900 px-4 py-2"
            className="mt-4 inline-flex items-center gap-2 bg-yellow-500 text-gray-900 font-semibold px-6 py-2 rounded-full hover:bg-yellow-400 transition"
          >
          <Github size={18}/>
          Go to  GitHub
      <ExternalLinkIcon size = {16}/></a> 
    },
    {
      title: "SocialConnect(Group)",
      description: "A full stack media application that enables users to create accounts, post contents, like and comment on posts. The application focuses on secure authentication, dynamic content rendering, and responsive UI design",
      technologies:"HTML, CSS, Node.js, Express.js, MongoDB, REST APIs",
      link: 
      <a
            href="https://github.com/SGopinath89/IT2342024SocialNetworkApp.git"
            target="blank"
            rel = "noopener noreferrer"
            //className="inline-flex items-center gap-2 rounded-lg bg-yellow-500 text-gray-900 px-4 py-2"
            className="mt-4 inline-flex items-center gap-2 bg-yellow-500 text-gray-900 font-semibold px-6 py-2 rounded-full hover:bg-yellow-400 transition"
          >
          <Github size={18}/>
          Go to  GitHub
      <ExternalLinkIcon size = {16}/></a> 
    }
  ];

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "Python", icon: <FaPython className="text-blue-400" /> },
      { name: "PHP", icon: <FaPhp className="text-indigo-400" /> },
      { name: "Java", icon: <FaJava className="text-red-500" /> },
      { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "React.js", icon: <SiReact className="text-cyan-400" /> },
      { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
      { name: "Spring Boot", icon: <SiSpringboot className="text-green-600" /> },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    ],
  },
  {
    title: "Developer Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
      { name: "GitHub", icon: <FaGithub className="text-white" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Communication", icon: <MdPeople className="text-yellow-400" /> },
      { name: "Teamwork", icon: <MdPeople className="text-yellow-400" /> },
      { name: "Problem Solving", icon: <MdPeople className="text-yellow-400" /> },
      { name: "Time Management", icon: <MdPeople className="text-yellow-400" /> },
    ],
  },
];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">

      {/* Header */}
      <header className="py-12 text-center bg-gray-950">
        <div className="max-w-6xl mx-auto px-6">
          <img
            src={myPhoto}
            alt="Sanduni Nisansala"
            className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-yellow-500"
          />
          <h1 className="text-4xl md:text-5xl font-bold mt-4">Sanduni Nisansala</h1>
          <p className="mt-2 text-lg md:text-xl text-gray-300">IT Undergraduate</p>
          <a
            href={myResume}
            download
            className="mt-4 inline-flex items-center gap-2 bg-yellow-500 text-gray-900 font-semibold px-6 py-2 rounded-full hover:bg-yellow-400 transition"
          >
            <Download size={18} /> Download Resume
          </a>
        </div>
      </header>

      {/* About */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold mb-4 text-yellow-500 text-center">About Me</h2>
        <p className="text-gray-300 leading-relaxed">
          I am a motivated BSc.(Hons) Information Technology student at the University of Jaffna with a strong academic background and hands-on experience in software engineering and full-stack web development. 
          I am actively seeking Software Engineer and Full-Stack Developer internship opportunities where I can apply my skills and continue learning in a real-world environment.
        </p>
      </section>

      {/* Skills */}
      <section className="max-w-6xl mx-auto px-6 py-17">
  <h2 className="text-3xl font-semibold mb-10 text-yellow-500 text-center py-20">
    Skills
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {skillCategories.map((category) => (
      <div
        key={category.title}
        className="bg-gray-900 p-6 rounded-2xl shadow-md"
      >
        <h3 className="text-xl font-semibold text-white mb-4">
          {category.title}
        </h3>

        <div className="grid grid-cols-2 gap-4">
          {category.skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-3 bg-gray-800 px-2 py-3 rounded-lg hover:scale-105 transition"
            >
              <span className="text-2xl">{skill.icon}</span>
              <span className="text-sm text-gray-200">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>


      {/* Achievements */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold mb-8 text-yellow-500 text-center">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((ach, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition transform"
            >
                 {ach.image}
              <div className="flex items-center gap-4 mb-8">
                {ach.icon}
                <h3 className="text-xl font-semibold">{ach.title}</h3>
              </div>
              <p className="text-gray-300">{ach.description}</p>
            </div>
          ))}Portf
        
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold mb-8 text-yellow-500 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-gray-800 shadow-lg hover:shadow-xl hover:scale-105 transition transform"
            >
              <h3 className="text-xl font-semibold text-yellow-400">{proj.title}</h3>
              <p className="text-gray-300 mt-2">{proj.description}</p>
               <p className="text-gray-300 mt-2">Techologies used: {proj.technologies}</p>
               {proj.link}
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="bg-gray-950 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6 text-yellow-500">Contact</h2>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/Sanduni0601" className="hover:text-yellow-400 transition"><Github /></a>
            <a href="mailto:sanduni06nisansala@gmail.com" className="hover:text-yellow-400 transition"><Mail /></a>
            <a href="https://www.linkedin.com/in/sanduni-nisansala-369b03292" className="hover:text-yellow-400 transition"><Linkedin /></a>
          </div>
          <p className="mt-6 text-gray-400 text-sm">
            © 2026 Sanduni Nisansala. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  );
}
