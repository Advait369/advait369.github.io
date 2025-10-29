import React from 'react';

// --- ICONS (Self-contained SVGs to avoid dependencies) ---
const MailIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
);
const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
);
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
const OrcidIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.384h2.393v10.532H7.369V4.384zm2.434 13.313c-.728 0-1.316.59-1.316 1.316s.588 1.316 1.316 1.316c.728 0 1.316-.59 1.316-1.316s-.588-1.316-1.316-1.316zm3.395-13.313h2.393v8.953c0 2.146-1.226 2.723-2.393 2.723s-2.393-.577-2.393-2.723V4.384h2.393z"></path></svg>
);
const LinkIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"></path></svg>
);
const CertificateIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="m10 13-2 2 2 2"></path><path d="m14 13 2 2-2 2"></path></svg>
);


// --- Data extracted from resume ---
const portfolioData = {
  name: "Advait Burande",
  title: "Chemical Engineering | AI & Materials Science",
  email: "advait.burande369@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/advait-burande-24a303295/",
    github: "https://github.com/Advait369",
    orcid: "https://orcid.org/0009-0000-6714-922X",
  },
  bio: "Chemical Engineering undergraduate researching at the intersection of materials science, signal processing, and AI. Author of peer-reviewed book chapters on AI applications in carbon capture and environmental analysis. Designed and proposed a novel IIoT predictive maintenance system, architecting a full-stack solution for industrial predictive maintenance. Research interests include conductive polymers, neural interfaces, nanomaterials for energy applications, and computational methods for complex system optimization.",
  skills: {
    technical: ["Python (NumPy, Scikit-learn, Matplotlib)", "Machine Learning Pipelines", "Data Analysis", "Integral Transform", "Industry 4.0 (IIoT)", "Predictive Maintenance", "Material Science", "Nanomaterials", "Polymer Science", "FreeCAD & AutoCAD", "Chemical Engineering"],
    domain: ["Materials Science", "Polymer Science", "Signal Processing", "Predictive Maintenance", "Chemical Engineering", "Data Analysis", "Sustainability", "Brain Machine Interface"],
    soft: ["Problem-Solving", "Time Management", "Adaptability", "Strategic Thinking", "Leadership", "Teamwork", "Communication"],
  },
  projects: [
    {
      title: "Dye-Sensitized Polymer Complex for Solar Paint Applications (Currently working on) | Winter 2025",
      description: "(Under the guidance of resp. Dr. V. B. Pawade) Gaining hands-on experience in synthesizing and characterizing Zinc Oxide (ZnO) nanomaterials for DSSC paint application. Acquired skills in thin-film fabrication of cathode, anode and electrolyte and material characterization, techniques.",
      tags: ["DSSC", "Solar Paint", "Nanomaterials", "ZnO", "Research"],
    },
    {
      title: "AI PDF Study Guide",
      description: "An intelligent learning companion that transforms PDFs into interactive study materials with AI-powered summaries, quizzes, diagrams, and a chatbot tutor, built with a multi-agent architecture.",
      tags: ["Streamlit", "AI/ML", "Groq API", "Python", "Multi-agent"],
      githubUrl: "https://github.com/Advait369/streamlit-study-website",
      liveUrl: "https://ai-pdf-study-guide.streamlit.app/",
    },
    {
      title: "Novel Adaptive Sawblade Optimization System",
      description: "Designed a novel multi-sensor, live, predictive maintenance, and optimization system for industrial sawblades. This IIoT solution shifts from reactive to predictive maintenance, addressing challenges like downtime, blade failure, and proactive optimization by analyzing vibrational, acoustic, and thermal data.",
      tags: ["IIoT", "Predictive Maintenance", "Sensor Fusion", "Python", "AI/ML"],
    },
    {
      title: "AI-Powered PDF to Course Generator",
      description: "Developed an autonomous agent in Python interfacing with the Gemini API for complex information processing. Engineered a full pipeline to automatically generate and compile publication-quality documents using LaTeX, demonstrating proficiency in scientific communication tools.",
      tags: ["Agentic AI", "Gemini API", "Python", "LaTeX", "Automation","Vibe Coding"],
    },
    {
      title: "Integrated Improvised Air Cavity Ventilation Design",
      description: "Proposed an enhanced air-cavity ventilation system augmented by mosquito repellent plants to reduce indoor mosquitoes for low-income housing in Kenya. The design improves on privacy, security, and usability while remaining low-cost and easy to implement.",
      tags: ["Sustainable Design", "Public Health", "Engineering", "Innovation"],
    },
     {
      title: "Obsidian Zettelkasten Assistant",
      description: "A multi-agent Python system that automatically generates comprehensive, interconnected Obsidian notes on any topic, complete with summaries, diagrams, and links to external resources like YouTube and research papers.",
      tags: ["Python", "Multi-agent AI", "Automation", "Obsidian", "Knowledge Management"],
    },
  ],
  publications: [
    { title: "Chapter: AI and Machine Learning", in: "Innovation in Flue Gas Treatment and Valorization", publisher: "Wiley Scrivener USA" },
    { title: "Chapter: Future Trends and Developments", in: "Innovation in Flue Gas Treatment and Valorization", publisher: "Wiley Scrivener USA" },
    { title: "Chapter: Utilization of Captured Flue Gas", in: "Innovation in Flue Gas Treatment and Valorization", publisher: "Wiley Scrivener USA" },
    { title: "Book Chapter: Evaluating the Link Between River Contamination and Public Health", in: "Reimaging Indian Rivers for Sustainability", publisher: "Springer Nature (In Press)" },
    { title: "Review: 3D Printing Technique for CO2 Capture", publisher: "Submitted" },
    { title: "Conference Presentation: A review on Rubber Tire Performance enhancement by PLA Bio-doping", event: "REACT 2024" },
  ],
  professionalActivities: [
    { name: "NeuroTechX" },
    { name: "AIChE (American Institute of Chemical Engineers)" },
    { name: "SPE Inspiring Plastic Professionals" },
  ],
  education: [
    {
      degree: "Bachelor of Technology, Chemical Engineering",
      minor: "Minor in Polymer Technology",
      institution: "Laxminarayan Innovation Technological University, Nagpur",
      years: "2023 - 2027 (Expected)",
    }
  ],
  certifications: [
    "Lean Six Sigma White Belt",
    "Six Sigma White Belt",
    "Chemistry of Nanomaterials",
    "Data Analysis",
    "Research Methodology and Statistical Analysis",
    "Ethics in Engineering Practice"
  ],
};


// --- Component Definitions ---

const Header = () => (
    <nav className="bg-white/90 backdrop-blur-lg sticky top-0 z-50 border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <a href="#" className="text-xl font-bold text-blue-900">Advait Burande</a>
            <div className="hidden md:flex space-x-8 text-slate-700">
                <a href="#about" className="hover:text-red-600 transition-colors">About</a>
                <a href="#skills" className="hover:text-red-600 transition-colors">Skills</a>
                <a href="#projects" className="hover:text-red-600 transition-colors">Projects</a>
                <a href="#publications" className="hover:text-red-600 transition-colors">Publications</a>
                 <a href="#activities" className="hover:text-red-600 transition-colors">Activities</a>
                <a href="#contact" className="hover:text-red-600 transition-colors">Contact</a>
            </div>
        </div>
    </nav>
);

const Hero = () => (
    <section className="py-24 md:py-40 bg-white">
        <div className="container mx-auto px-6 text-center">
            <div className="flex justify-center mb-8">
                <img
                    src="https://via.placeholder.com/160"
                    alt="Advait Burande"
                    className="w-40 h-40 rounded-full object-cover shadow-2xl border-4 border-white"
                />
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-red-600 mb-4">{portfolioData.name}</h1>
            <p className="text-2xl md:text-3xl text-blue-900 font-light">{portfolioData.title}</p>
        </div>
    </section>
);

const Section = ({ id, title, children, bgColor = 'bg-slate-50' }: { id: string, title: string, children: React.ReactNode, bgColor?: string }) => (
    <section id={id} className={`py-20 md:py-28 ${bgColor}`}>
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-blue-900 mb-16">{title}</h2>
            {children}
        </div>
    </section>
);

const About = () => (
    <Section id="about" title="About Me" bgColor="bg-slate-50">
        <p className="max-w-4xl mx-auto text-xl text-slate-700 leading-relaxed text-center">
            {portfolioData.bio}
        </p>
    </Section>
);

const Skills = () => (
    <Section id="skills" title="Skills" bgColor="bg-white">
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div>
                <h3 className="text-2xl font-semibold text-blue-900 mb-6 text-center md:text-left">Technical Skills</h3>
                <ul className="space-y-3">
                    {portfolioData.skills.technical.map(skill => <li key={skill} className="text-slate-700 flex items-center text-lg"><span className="w-2.5 h-2.5 bg-red-500 rounded-full mr-4 flex-shrink-0"></span>{skill}</li>)}
                </ul>
            </div>
            <div>
                <h3 className="text-2xl font-semibold text-blue-900 mb-6 text-center md:text-left">Domain Knowledge</h3>
                <ul className="space-y-3">
                    {portfolioData.skills.domain.map(skill => <li key={skill} className="text-slate-700 flex items-center text-lg"><span className="w-2.5 h-2.5 bg-red-500 rounded-full mr-4 flex-shrink-0"></span>{skill}</li>)}
                </ul>
            </div>
            <div>
                <h3 className="text-2xl font-semibold text-blue-900 mb-6 text-center md:text-left">Soft Skills</h3>
                <ul className="space-y-3">
                    {portfolioData.skills.soft.map(skill => <li key={skill} className="text-slate-700 flex items-center text-lg"><span className="w-2.5 h-2.5 bg-red-500 rounded-full mr-4 flex-shrink-0"></span>{skill}</li>)}
                </ul>
            </div>
        </div>
    </Section>
);

const Projects = () => (
    <Section id="projects" title="Projects & Research" bgColor="bg-slate-50">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.projects.map(project => (
                <div key={project.title} className="bg-white rounded-lg shadow-lg p-6 border border-slate-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
                    <h3 className="font-bold text-xl text-blue-900 mb-3">{project.title}</h3>
                    <p className="text-slate-600 text-base mb-4 flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map(tag => <span key={tag} className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">{tag}</span>)}
                    </div>
                    <div className="flex items-center space-x-4 mt-auto pt-4 border-t border-slate-200">
                        {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-red-600 transition-colors"><GithubIcon className="w-6 h-6" /></a>}
                        {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-red-600 transition-colors"><LinkIcon className="w-6 h-6" /></a>}
                    </div>
                </div>
            ))}
        </div>
    </Section>
);

const Publications = () => (
    <Section id="publications" title="Publications & Presentations" bgColor="bg-white">
        <div className="max-w-4xl mx-auto">
            <ul className="space-y-6">
                {portfolioData.publications.map((pub, index) => (
                    <li key={index} className="p-5 bg-slate-50 border-l-4 border-red-600 rounded-r-lg">
                        <p className="font-semibold text-lg text-blue-900">{pub.title}</p>
                        <p className="text-base text-slate-600 mt-1">
                            {pub.in && <span>In: <em>{pub.in}</em>, </span>}
                            {pub.event && <span>Event: <em>{pub.event}</em>, </span>}
                            {pub.publisher && <span>{pub.publisher}</span>}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    </Section>
);

const Activities = () => (
    <Section id="activities" title="Professional Activities" bgColor="bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
             <div className="flex justify-center flex-wrap gap-4">
                 {portfolioData.professionalActivities.map(activity => (
                    <span key={activity.name} className="bg-white text-blue-900 text-lg font-medium px-5 py-2 rounded-full border border-slate-200 shadow-md">{activity.name}</span>
                 ))}
             </div>
        </div>
    </Section>
);

const Education = () => (
     <Section id="education" title="Education" bgColor="bg-white">
        <div className="max-w-3xl mx-auto bg-slate-50 p-8 rounded-lg shadow-lg border border-slate-200 text-center">
            {portfolioData.education.map((edu, index) => (
                <div key={index}>
                    <h3 className="text-2xl font-bold text-blue-900">{edu.degree}</h3>
                    {edu.minor && <p className="text-xl text-slate-700 font-semibold mt-1">{edu.minor}</p>}
                    <p className="text-lg text-slate-600 mt-2">{edu.institution}</p>
                    <p className="text-md text-slate-500 mt-1">{edu.years}</p>
                </div>
            ))}
        </div>
     </Section>
);

const Certifications = () => (
    <Section id="certifications" title="Certifications" bgColor="bg-slate-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
            {portfolioData.certifications.map((cert) => (
                <div key={cert} className="flex items-center">
                    <CertificateIcon className="w-6 h-6 mr-4 text-red-600 flex-shrink-0" />
                    <span className="text-slate-700 text-lg">{cert}</span>
                </div>
            ))}
        </div>
    </Section>
);


const Contact = () => (
    <section id="contact" className="py-20 md:py-28 bg-blue-900 text-white">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-blue-200 text-xl mb-10 max-w-2xl mx-auto">I'm always open to discussing new research, projects, or opportunities. Feel free to reach out.</p>
            <a href={`mailto:${portfolioData.email}`} className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full transition-transform duration-300 ease-in-out hover:scale-105 text-lg">
                <MailIcon className="w-6 h-6 mr-3" />
                <span>{portfolioData.email}</span>
            </a>
            <div className="flex justify-center space-x-8 mt-12">
                <a href={portfolioData.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-red-500 transition-colors"><LinkedinIcon className="w-8 h-8" /></a>
                <a href={portfolioData.links.github} target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-red-500 transition-colors"><GithubIcon className="w-8 h-8" /></a>
                <a href={portfolioData.links.orcid} target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-red-500 transition-colors"><OrcidIcon className="w-8 h-8" /></a>
            </div>
        </div>
    </section>
);

const Footer = () => (
    <footer className="bg-slate-900 text-slate-400 py-6">
        <div className="container mx-auto px-6 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
        </div>
    </footer>
);

// --- Main App Component ---
const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Publications />
        <Activities />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
