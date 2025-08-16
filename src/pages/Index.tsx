import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Mail, MapPin, GraduationCap, Brain, Code, Briefcase, Calendar, Award, Github } from "lucide-react";
import { useState, useEffect } from "react";
import IndexBg from "./indexbg";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const technicalSkills = [
    "HTML", "CSS", "JavaScript", "C++", "Java", "PHP", "Kotlin", "Python", "SQL"
  ];

  const frameworks = [
    "Flutter", "Firebase"
  ];

  const languages = [
    "English (Fluent)", "Malay", "Mandarin"
  ];

  const projects = [
    {
      title: "NiagaNow",
      period: "Jun 2025 - Jul 2025",
      description: "Designed and built a website from scratch for MSMEs to check loan eligibility and manage transaction records, representing a three-person team at PayHack 2025. Led the development process using TypeScript, JavaScript, and HTML.",
      skills: ["TypeScript", "JavaScript", "HTML"],
      github: "https://github.com/mmmchu/NiagaNow-Group-Maxins.git"
    },
    {
      title: "Tunesphere",
      period: "Sep 2024 - May 2025",
      description: "Tunesphere is a final year project centred on the development of a mobile application that utilises Optical Music Recognition (OMR) to convert images of sheet music into playable MIDI audio. The application is built using Flutter and Dart for the front-end interface, with Python handling the back-end processing and OMR functionalities.",
      skills: ["Python", "Flutter", "Dart"],
      github: "https://github.com/mmmchu/COMP3025_20512066_TunesphereApplication.git"
    },
    {
      title: "Adaptive Smart Traffic Light",
      period: "Mar 2025 - May 2025",
      description: "This project involves the development of a Reinforcement Learning (RL)-based traffic signal control system using Deep Q-Networks (DQN) to optimise vehicle flow within a simulated urban environment. The system is evaluated under varying traffic conditions to assess its effectiveness in reducing congestion, in comparison to traditional rule-based traffic control methods.",
      skills: ["Python"],
      github: "https://github.com/mmmchu/COMP3071_Smart-Traffic-Light.git"
    },
    {
      title: "PetsLane",
      period: "Sep 2024 - Nov 2024",
      description: "An Android mobile application, inspired by Snapchat and designed specifically for pet lovers, enables users to capture and save pet images along with associated details, notes, and dietary information. Developed using Kotlin and integrated with Firebase, the application offers a seamless and user-friendly experience for managing and preserving important aspects of pet care.",
      skills: ["Kotlin", "Firebase"],
      github: "https://github.com/mmmchu/COMP3040_20512066_PetsLane.git"
    },
    {
      title: "Symbolic Artificial Intelligence",
      period: "Sep 2024 - Nov 2024",
      description: "Implementation on solving the Workflow Satisfiability Problem using Python, applying symbolic AI techniques such as constraint satisfaction and optimisation.",
      skills: ["Python"],
      github: "https://github.com/mmmchu/COMP3070_SAI.git"
    },
    {
      title: "FitTrack",
      period: "Sep 2023 - May 2024",
      description: "A workout tracking application with built-in social media features. Connect with friends, share achievements, join challenges, and stay motivated through a supportive fitness community — all in one place.",
      skills: ["Flutter", "Firebase"],
      github: "https://github.com/wahpiangle/FitTrack.git"
    },
    {
      title: "Brick Breaker Game",
      period: "Oct 2023 - Dec 2023",
      description: "A game which uses Java, Maven for dependency management and CSS, ensuring an engaging and visually appealing gaming experience.",
      skills: ["Java", "CSS", "Maven"],
      github: "https://github.com/mmmchu/COMP2042_CW_hcywc4.git"
    },
    {
      title: "Scheduling Programs in C",
      period: "Oct 2023 - Dec 2023",
      description: "First-Come-First-Serve (FCFS), Multi-Level Feedback Queue (MLFQ), and Round Robin (RR) scheduling algorithms in C, providing a program for understanding and comparing different CPU scheduling techniques.",
      skills: ["C"],
      github: "https://github.com/mmmchu/cschedulingprograms.git"
    },
    {
      title: "Car Rental Reservation System",
      period: "Mar 2023 - Apr 2023",
      description: "A web front-end to the database using HTML, CSS and Javascript that will connect to a database and execute queries using PHP and SQL.",
      skills: ["PHP", "SQL", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/mmmchu/CRWebsite.git"
    }
  ];

  const workExperience = [
    {
      title: "Research Assistant",
      company: "University of Nottingham",
      period: "1 June 2024 – 31 Aug 2024",
      responsibilities: [
        "Studied fundamental and advanced image processing techniques, with a focus on their application in Optical Music Recognition (OMR), including techniques such as binarization, morphological operations.",
        "Tested and evaluated preprocessing algorithms such as median blurring, adaptive thresholding, morphological closing, and Hough line detection to remove noise.",
        "Implemented image processing techniques in Python using OpenCV, enabling the detection and segmentation of musical symbols from scanned sheet music."
      ]
    },
    {
      title: "Front Desk Administrator",
      company: "Wings Chiropractic Taipan",
      period: "1 June 2023 – 31 Aug 2023",
      responsibilities: [
        "Managed front desk operations including patient scheduling, appointment confirmations, and client inquiries.",
        "Handled confidential health information in compliance with data protection policies, demonstrating professional skills and attention.",
        "Maintained accurate patient records, processed billing and payments."
      ]
    }
  ];

  const education = [
    {
      degree: "BSc (Hons) Computer Science with AI",
      institution: "University of Nottingham",
      period: "Sept 2022 – May 2025",
      details: [
        "University of Nottingham, School of Computer Science, Best Industry Project 2024 – 3rd Place",
        "UNM Entrepreneurial Bootcamp 2024 – Participant",
        "PayHack2025 Top 17 Finalist – Participant"
      ]
    },
    {
      degree: "A-Levels",
      institution: "INTI International University & College, Cambridge A-Levels",
      period: "Jan 2021 – Jan 2022",
      details: [
        "Chemistry, Biology and Mathematics",
        "Certificate of Achievement: Cambridge AS-Level Examination November 2021"
      ]
    },
    {
      degree: "Secondary Education",
      institution: "Collinz International School",
      period: "Jan 2016 – Dec 2020",
      details: [
        "The Next Generation Leadership Workshop: Klang Valley 2 – Participant",
        "Collinz International School Top Scorer of Year 9, 2018"
      ]
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Interactive Nebula Background */}
      <IndexBg />

      {/* Hero Section */}
      <section className="relative text-white py-20 px-4 z-10">
        <div className={`max-w-4xl mx-auto text-center md:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <img 
              src="./lovable-uploads/9e148b8f-b58c-4150-b6e8-6eda3a0c6fed.png" 
              alt="Mabel Chu Wen Xin" 
              className="w-32 h-32 rounded-full mx-auto md:mx-0 object-cover border-4 border-white/20 shadow-lg hover:scale-110 transition-transform duration-300 hover:rotate-2"
            />
          </div>
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">Chu Wen Xin Mabel</h1>
          <p className="text-xl mb-2 text-white/90 animate-slide-in-right">Computer Science Graduate</p>
          <p className="text-lg mb-4 text-white/80">BSc (Hons) Computer Science with Artificial Intelligence</p>
          <p className="text-base mb-8 text-white/70">47600 Subang Jaya, Selangor</p>
          <div className="flex items-center justify-center md:justify-start gap-2 mb-8 text-white/70">
            <MapPin className="w-4 h-4 animate-bounce" />
            <span>Malaysia</span>
          </div>
          <Button 
            variant="secondary" 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            asChild
          >
            <a href="https://www.linkedin.com/in/mabel-chu-wen-xin-193bba299" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              View LinkedIn Profile
            </a>
          </Button>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4 relative z-10 bg-background/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Projects</h2>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <Card key={index} className="p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] animate-fade-in bg-card/80 backdrop-blur-sm" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-semibold text-primary hover:text-accent transition-colors duration-200">{project.title}</h3>
                    {project.github && (
                      <div className="flex items-center justify-center md:justify-start mt-1 text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                        <Github className="w-4 h-4 mr-2 hover:rotate-12 transition-transform duration-200" />
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          {project.github}
                        </a>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center justify-center md:justify-start text-sm text-muted-foreground mt-2 md:mt-0">
                    <Calendar className="w-4 h-4 mr-2" />
                    {project.period}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 text-center md:text-left">
                  {project.description}
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {project.skills.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="hover:scale-105 transition-transform duration-200 cursor-default">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="py-16 px-4 relative z-10 bg-background/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Work Experience</h2>
          <div className="space-y-6">
            {workExperience.map((work, index) => (
              <Card key={index} className="p-6 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/80 backdrop-blur-sm animate-fade-in">
                <div className="flex flex-col md:flex-row md:justify-between mb-4 text-center md:text-left">
                  <h3 className="text-xl font-semibold">{work.title}</h3>
                  <span className="text-sm text-muted-foreground mt-2 md:mt-0">{work.company} | {work.period}</span>
                </div>
                <ul className="list-disc list-inside text-sm text-muted-foreground">
                  {work.responsibilities.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-4 relative z-10 bg-background/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="p-6 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/80 backdrop-blur-sm animate-fade-in">
                <div className="flex flex-col md:flex-row md:justify-between mb-4 text-center md:text-left">
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <span className="text-sm text-muted-foreground mt-2 md:mt-0">{edu.institution} | {edu.period}</span>
                </div>
                <ul className="list-disc list-inside text-sm text-muted-foreground">
                  {edu.details.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 relative z-10 bg-background/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 animate-fade-in">Skills</h2>
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            {technicalSkills.map((skill, idx) => (
              <Badge key={idx} variant="secondary" className="hover:scale-105 transition-transform duration-200 cursor-default">{skill}</Badge>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            {frameworks.map((skill, idx) => (
              <Badge key={idx} variant="secondary" className="hover:scale-105 transition-transform duration-200 cursor-default">{skill}</Badge>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {languages.map((skill, idx) => (
              <Badge key={idx} variant="secondary" className="hover:scale-105 transition-transform duration-200 cursor-default">{skill}</Badge>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
