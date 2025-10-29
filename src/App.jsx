import React from 'react';

// --- ICONS ---
const MailIcon = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
);

const GithubIcon = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
);

const LinkedinIcon = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const OrcidIcon = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.384h2.393v10.532H7.369V4.384zm2.434 13.313c-.728 0-1.316.59-1.316 1.316s.588 1.316 1.316 1.316c.728 0 1.316-.59 1.316-1.316s-.588-1.316-1.316-1.316zm3.395-13.313h2.393v8.953c0 2.146-1.226 2.723-2.393 2.723s-2.393-.577-2.393-2.723V4.384h2.393z"></path></svg>
);

const LinkIcon = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"></path></svg>
);

const CertificateIcon = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="m10 13-2 2 2 2"></path><path d="m14 13 2 2-2 2"></path></svg>
);

// --- Data ---
const portfolioData = {
  name: "Advait Burande",
  title: "Chemical Engineering | AI & Materials Science",
  email: "advait.burande369@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/advait-burande-24a303295/",
    github: "https://github.com/Advait369",
    orcid: "https://orcid.org/0009-0000-6714-922X",
  },
  bio: "Chemical Engineering undergraduate researching at the intersection of materials science, signal processing, and AI. Author of peer-reviewed book chapters on AI applications in carbon capture and environmental analysis. Designed and proposed a novel IIoT predictive maintenance system, architecting a full-stack solution for industrial predictive maintenance.",
  skills: {
    technical: ["Python (NumPy, Scikit-learn, Matplotlib)", "Machine Learning", "Data Analysis", "Industry 4.0 (IIoT)", "Predictive Maintenance", "Material Science", "Nanomaterials", "Polymer Science", "FreeCAD & AutoCAD"],
    domain: ["Materials Science", "Polymer Science", "Signal Processing", "Chemical Engineering", "Sustainability", "Brain Machine Interface"],
    soft: ["Problem-Solving", "Strategic Thinking", "Leadership", "Teamwork", "Communication"],
  },
  projects: [
    {
      title: "Dye-Sensitized Polymer Complex for Solar Paint",
      description: "Synthesizing and characterizing Zinc Oxide nanomaterials for DSSC paint application under Dr. V. B. Pawade. Focus on thin-film fabrication and material characterization.",
      tags: ["DSSC", "Solar Paint", "Nanomaterials", "ZnO", "Research"],
    },
    {
      title: "AI PDF Study Guide",
      description: "Transforms PDFs into interactive study materials with AI-powered summaries, quizzes, and chatbot tutor using multi-agent architecture.",
      tags: ["Streamlit", "AI/ML", "Groq API", "Python"],
      githubUrl: "https://github.com/Advait369/streamlit-study-website",
      liveUrl: "https://ai-pdf-study-guide.streamlit.app/",
    },
    {
      title: "Adaptive Sawblade Optimization System",
      description: "Designed IIoT predictive maintenance system for industrial sawblades using multi-sensor data fusion to shift from reactive to predictive maintenance.",
      tags: ["IIoT", "Predictive Maintenance", "Sensor Fusion", "Python"],
    },
  ],
  publications: [
    { title: "Chapter: AI and Machine Learning", in: "Innovation in Flue Gas Treatment and Valorization", publisher: "Wiley Scrivener USA" },
    { title: "Chapter: Future Trends and Developments", in: "Innovation in Flue Gas Treatment and Valorization", publisher: "Wiley Scrivener USA" },
    { title: "Book Chapter: Evaluating River Contamination and Public Health", in: "Reimaging Indian Rivers for Sustainability", publisher: "Springer Nature (In Press)" },
  ],
  professionalActivities: [
    "NeuroTechX",
    "AIChE",
    "SPE Inspiring Plastic Professionals",
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
    "Chemistry of Nanomaterials",
    "Data Analysis",
    "Research Methodology and Statistical Analysis",
  ],
};

// --- Components ---
const Header = () => (
  <nav className="bg-white/90 backdrop-blur-lg sticky top-0 z-50 border-b border-gray-200 shadow-sm">
    <div className="container-custom py-4 flex justify-between items-center">
      <a href="#" className="text-xl font-bold text-primary-900">Advait Burande</a>
      <div className="hidden md:flex space-x-8 text-gray-700">
        <a href="#about" className="hover:text-primary-600 transition-colors">About</a>
        <a href="#skills" className="hover:text-primary-600 transition-colors">Skills</a>
        <a href="#projects" className="hover:text-primary-600 transition-colors">Projects</a>
        <a href="#publications" className="hover:text-primary-600 transition-colors">Publications</a>
        <a href="#contact" className="hover:text-primary-600 transition-colors">Contact</a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="section-padding bg-white">
    <div className="container-custom text-center">
      <h1 className="text-5xl md:text-7xl font-bold text-primary-600 mb-4">{portfolioData.name}</h1>
      <p className="text-2xl md:text-3xl text-primary-900 font-light mb-8">{portfolioData.title}</p>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
        {portfolioData.bio}
      </p>
    </div>
  </section>
);

const Section = ({ id, title, children, bg = 'bg-gray-50' }) => (
  <section id={id} className={`section-padding ${bg}`}>
    <div className="container-custom">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-900 mb-12">{title}</h2>
      {children}
    </div>
  </section>
);

const Skills = () => (
  <Section id="skills" title="Skills" bg="bg-white">
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <div className="text-center">
        <h3 className="text-xl font-semibold text-primary-900 mb-6">Technical Skills</h3>
        <div className="flex flex-wrap justify-center gap-2">
          {portfolioData.skills.technical.map(skill => (
            <span key={skill} className="bg-primary-50 text-primary-700 px-3 py-2 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div className="text-center">
        <h3 className="text-xl font-semibold text-primary-900 mb-6">Domain Knowledge</h3>
        <div className="flex flex-wrap justify-center gap-2">
          {portfolioData.skills.domain.map(skill => (
            <span key={skill} className="bg-primary-50 text-primary-700 px-3 py-2 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div className="text-center">
        <h3 className="text-xl font-semibold text-primary-900 mb-6">Soft Skills</h3>
        <div className="flex flex-wrap justify-center gap-2">
          {portfolioData.skills.soft.map(skill => (
            <span key={skill} className="bg-primary-50 text-primary-700 px-3 py-2 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  </Section>
);

const Projects = () => (
  <Section id="projects" title="Projects & Research">
    <div className="grid md:grid-cols-2 gap-6">
      {portfolioData.projects.map(project => (
        <div key={project.title} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
          <h3 className="font-bold text-xl text-primary-900 mb-3">{project.title}</h3>
          <p className="text-gray-600 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map(tag => (
              <span key={tag} className="bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          {(project.githubUrl || project.liveUrl) && (
            <div className="flex space-x-4 pt-4 border-t border-gray-200">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary-600 transition-colors">
                  <GithubIcon className="w-5 h-5" />
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary-600 transition-colors">
                  <LinkIcon className="w-5 h-5" />
                </a>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  </Section>
);

const Publications = () => (
  <Section id="publications" title="Publications" bg="bg-white">
    <div className="max-w-4xl mx-auto space-y-4">
      {portfolioData.publications.map((pub, index) => (
        <div key={index} className="p-4 bg-gray-50 border-l-4 border-primary-600 rounded-r-lg">
          <p className="font-semibold text-primary-900">{pub.title}</p>
          <p className="text-gray-600 text-sm mt-1">
            {pub.in && <span>In: <em>{pub.in}</em></span>}
            {pub.publisher && <span>, {pub.publisher}</span>}
          </p>
        </div>
      ))}
    </div>
  </Section>
);

const Education = () => (
  <Section id="education" title="Education">
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-200 text-center">
      {portfolioData.education.map((edu, index) => (
        <div key={index}>
          <h3 className="text-2xl font-bold text-primary-900">{edu.degree}</h3>
          {edu.minor && <p className="text-xl text-gray-700 font-semibold mt-2">{edu.minor}</p>}
          <p className="text-lg text-gray-600 mt-3">{edu.institution}</p>
          <p className="text-gray-500 mt-2">{edu.years}</p>
        </div>
      ))}
    </div>
  </Section>
);

const Contact = () => (
  <section id="contact" className="section-padding bg-primary-900 text-white">
    <div className="container-custom text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
      <p className="text-primary-200 text-lg mb-8 max-w-2xl mx-auto">
        I'm always open to discussing new research, projects, or opportunities.
      </p>
      <a 
        href={`mailto:${portfolioData.email}`}
        className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105"
      >
        <MailIcon className="w-5 h-5 mr-3" />
        <span>{portfolioData.email}</span>
      </a>
      <div className="flex justify-center space-x-6 mt-8">
        <a href={portfolioData.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary-200 hover:text-white transition-colors">
          <LinkedinIcon className="w-6 h-6" />
        </a>
        <a href={portfolioData.links.github} target="_blank" rel="noopener noreferrer" className="text-primary-200 hover:text-white transition-colors">
          <GithubIcon className="w-6 h-6" />
        </a>
        <a href={portfolioData.links.orcid} target="_blank" rel="noopener noreferrer" className="text-primary-200 hover:text-white transition-colors">
          <OrcidIcon className="w-6 h-6" />
        </a>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-900 text-gray-400 py-6">
    <div className="container-custom text-center text-sm">
      <p>&copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
    </div>
  </footer>
);

// --- Main App ---
const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Publications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
