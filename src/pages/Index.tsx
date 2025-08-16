
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
      github: "GitHub - mmmchu/cschedulingprograms"
    },
    {
      title: "Car Rental Reservation System",
      period: "Mar 2023 - Apr 2023",
      description: "A web front-end to the database using HTML, CSS and Javascript that will connect to a database and execute queries using PHP and SQL.",
      skills: ["PHP", "SQL", "HTML", "CSS", "JavaScript"],
      github: "GitHub - mmmchu/CRWebsite"
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
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <img 
              src="./lovable-uploads/9e148b8f-b58c-4150-b6e8-6eda3a0c6fed.png" 
              alt="Mabel Chu Wen Xin" 
              className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white/20 shadow-lg hover:scale-110 transition-transform duration-300 hover:rotate-2"
            />
          </div>
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">Chu Wen Xin Mabel</h1>
          <p className="text-xl mb-2 text-white/90 animate-slide-in-right">Computer Science Graduate</p>
          <p className="text-lg mb-4 text-white/80">BSc (Hons) Computer Science with Artificial Intelligence</p>
          <p className="text-base mb-8 text-white/70">47600 Subang Jaya, Selangor</p>
          <div className="flex items-center justify-center gap-2 mb-8 text-white/70">
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
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-primary hover:text-accent transition-colors duration-200">{project.title}</h3>
                    {project.github && (
                      <div className="flex items-center mt-1 text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                        <Github className="w-4 h-4 mr-2 hover:rotate-12 transition-transform duration-200" />
                        {project.github.startsWith('http') ? (
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                            {project.github}
                          </a>
                        ) : (
                          project.github
                        )}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    {project.period}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
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
      <section className="py-16 px-4 relative z-10 bg-muted/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Work Experience</h2>
          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <Card key={index} className="p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-in-right bg-card/80 backdrop-blur-sm" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-primary">{job.title}</h3>
                    <p className="text-lg text-muted-foreground">{job.company}</p>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    {job.period}
                  </div>
                </div>
                <ul className="space-y-2">
                  {job.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground leading-relaxed hover:text-foreground transition-colors duration-200">
                      • {responsibility}
                    </li>
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
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Education & Awards</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in bg-card/80 backdrop-blur-sm" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-primary">{edu.degree}</h3>
                    <p className="text-lg text-muted-foreground">{edu.institution}</p>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    {edu.period}
                  </div>
                </div>
                <ul className="space-y-1">
                  {edu.details.map((detail, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                      • {detail}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 relative z-10 bg-muted/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Technical Skills</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:rotate-1 animate-slide-in-right bg-card/80 backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <Code className="w-6 h-6 text-primary mr-3 hover:rotate-12 transition-transform duration-200" />
                <h3 className="text-xl font-semibold">Programming Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.map((skill, index) => (
                  <Badge key={skill} variant="secondary" className="hover:scale-110 transition-all duration-200 cursor-default hover:bg-primary hover:text-primary-foreground">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:-rotate-1 animate-scale-in bg-card/80 backdrop-blur-sm" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center mb-4">
                <Brain className="w-6 h-6 text-accent mr-3 hover:pulse transition-all duration-200" />
                <h3 className="text-xl font-semibold">Frameworks</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {frameworks.map((framework, index) => (
                  <Badge key={framework} variant="secondary" className="hover:scale-110 transition-all duration-200 cursor-default hover:bg-accent hover:text-accent-foreground">
                    {framework}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:rotate-1 animate-slide-in-right bg-card/80 backdrop-blur-sm" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center mb-4">
                <GraduationCap className="w-6 h-6 text-primary mr-3 hover:bounce transition-all duration-200" />
                <h3 className="text-xl font-semibold">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {languages.map((language, index) => (
                  <Badge key={language} variant="secondary" className="hover:scale-110 transition-all duration-200 cursor-default hover:bg-primary hover:text-primary-foreground">
                    {language}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Strengths */}
      <section className="py-16 px-4 relative z-10 bg-background/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Key Strengths</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 bg-card/80 backdrop-blur-sm">
              <Brain className="w-8 h-8 text-primary mx-auto mb-4 hover:rotate-12 transition-transform duration-300" />
              <h3 className="font-semibold mb-2">Mobile Development Passion</h3>
              <p className="text-sm text-muted-foreground">Passionate about mobile application development but open to venture into other fields</p>
            </Card>
            
            <Card className="p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 bg-card/80 backdrop-blur-sm" style={{ animationDelay: '0.1s' }}>
              <Award className="w-8 h-8 text-accent mx-auto mb-4 hover:rotate-12 transition-transform duration-300" />
              <h3 className="font-semibold mb-2">Adaptable Problem Solver</h3>
              <p className="text-sm text-muted-foreground">Quick learner with strong analytical skills and ability to adapt to new technologies and challenges</p>
            </Card>
            
            <Card className="p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 bg-card/80 backdrop-blur-sm" style={{ animationDelay: '0.2s' }}>
              <Briefcase className="w-8 h-8 text-primary mx-auto mb-4 hover:rotate-12 transition-transform duration-300" />
              <h3 className="font-semibold mb-2">Team Collaboration</h3>
              <p className="text-sm text-muted-foreground">Excellent communication skills with experience working in diverse teams and multicultural environments</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-white py-16 px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 animate-fade-in">Let's Connect</h2>
          <p className="text-lg mb-8 text-white/90 animate-slide-in-right">
            Looking for opportunities to work on real-life challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              asChild
            >
              <a href="https://www.linkedin.com/in/mabel-chu-wen-xin-193bba299" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                LinkedIn Profile
              </a>
            </Button>
            <div className="flex items-center justify-center gap-2 text-white/90 text-lg">
              <Mail className="w-5 h-5 animate-bounce" />
              <span>mchu1703@gmail.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/80 backdrop-blur-sm py-8 px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Chu Wen Xin Mabel.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
