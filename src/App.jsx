import { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCode, FaBrain, FaTools, FaProjectDiagram, FaGraduationCap, FaAward, FaStar, FaArrowDown, FaChevronRight } from 'react-icons/fa'

export default function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Kanikshaa R
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map(section => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize text-sm font-medium transition-colors hover:text-blue-400 ${
                    activeSection === section ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Avatar */}
          <div className="relative mb-8">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 animate-pulse">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <span className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  KR
                </span>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-ping"></div>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Hi, I'm Kanikshaa R
            </span>
          </h1>

          <div className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
            AI/ML Engineer & Full-stack Developer
          </div>

          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            I build intelligent machine learning solutions and scalable web applications.
            Passionate about AI, data science, and creating meaningful technological impact.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-6 justify-center mb-16">
            <button
              onClick={() => scrollToSection('projects')}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Work
              <FaChevronRight className="inline ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <FaArrowDown className="text-purple-400 text-2xl mx-auto" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm an AI/ML student and developer with hands-on experience in machine learning, data science, and full-stack development.
                I'm passionate about building intelligent systems that solve real-world problems.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                Currently pursuing B.E in Computational Intelligence and Machine Learning, I've worked on diverse projects including EHR systems, spam detection, and price prediction models.
                I'm eager to contribute my AI/ML knowledge and technical skills to impactful solutions.
              </p>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <FaGraduationCap className="text-purple-400 text-xl" />
                  <div>
                    <p className="text-white font-semibold">Education</p>
                    <p className="text-gray-400 text-sm">B.E in Computational Intelligence and Machine Learning</p>
                    <p className="text-gray-500 text-xs">K.S Ranganayaki College of Technology, TamilNadu (Expected 2028)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300">
                <div className="text-5xl font-bold text-blue-400 mb-2">8</div>
                <div className="text-gray-300 font-medium">Projects Built</div>
                <div className="w-full h-1 bg-blue-500/30 rounded-full mt-4"></div>
              </div>

              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300">
                <div className="text-5xl font-bold text-purple-400 mb-2">8.47</div>
                <div className="text-gray-300 font-medium">Academic CGPA</div>
                <div className="w-full h-1 bg-purple-500/30 rounded-full mt-4"></div>
              </div>

              <div className="bg-gradient-to-br from-pink-600/20 to-red-600/20 backdrop-blur-sm border border-pink-500/20 rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300">
                <div className="text-5xl font-bold text-pink-400 mb-2">5+</div>
                <div className="text-gray-300 font-medium">Certifications</div>
                <div className="w-full h-1 bg-pink-500/30 rounded-full mt-4"></div>
              </div>

              <div className="bg-gradient-to-br from-green-600/20 to-blue-600/20 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300">
                <div className="text-5xl font-bold text-green-400 mb-2">15+</div>
                <div className="text-gray-300 font-medium">Technical Skills</div>
                <div className="w-full h-1 bg-green-500/30 rounded-full mt-4"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Skills & Expertise
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Programming Languages */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:scale-105 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-500/20 rounded-xl">
                  <FaCode className="text-blue-400 text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-white">Programming</h3>
              </div>
              <div className="space-y-4">
                {[
                  { name: 'Python', level: 95 },
                  { name: 'C', level: 85 },
                  { name: 'HTML/CSS', level: 90 },
                  { name: 'SQL', level: 88 }
                ].map(skill => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 group-hover:from-blue-400 group-hover:to-purple-400"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ML/AI Skills */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:scale-105 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-purple-500/20 rounded-xl">
                  <FaBrain className="text-purple-400 text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-white">ML/AI</h3>
              </div>
              <div className="space-y-4">
                {[
                  { name: 'Scikit-learn', level: 92 },
                  { name: 'Pandas', level: 93 },
                  { name: 'NumPy', level: 90 },
                  { name: 'NLP', level: 85 }
                ].map(skill => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000 group-hover:from-purple-400 group-hover:to-pink-400"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Cloud */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:scale-105 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-green-500/20 rounded-xl">
                  <FaTools className="text-green-400 text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-white">Tools & Cloud</h3>
              </div>
              <div className="space-y-4">
                {[
                  { name: 'Git & GitHub', level: 90 },
                  { name: 'Google Colab', level: 92 },
                  { name: 'Docker', level: 80 },
                  { name: 'Azure & OCI', level: 85 }
                ].map(skill => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-1000 group-hover:from-green-400 group-hover:to-blue-400"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center mb-8">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Certifications
              </span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Oracle Cloud Infrastructure', subtitle: 'Generative AI Professional', icon: FaAward },
                { title: 'Microsoft Azure', subtitle: 'AZ-900 Fundamentals', icon: FaStar },
                { title: 'MongoDB', subtitle: 'Database Basics', icon: FaAward },
                { title: 'Infosys Java', subtitle: 'Database Connectivity', icon: FaStar }
              ].map((cert, idx) => (
                <div key={idx} className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 group">
                  <cert.icon className="text-yellow-400 text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-semibold mb-2">{cert.title}</h4>
                  <p className="text-gray-400 text-sm">{cert.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-red-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Interoperable EHR System',
                description: 'Built an end-to-end EHR solution with data preprocessing, feature engineering, and pipeline design. Trained and optimized models using cross-validation techniques.',
                tags: ['Python', 'FastAPI', 'Scikit-learn', 'XGBoost'],
                gradient: 'from-blue-500/20 to-purple-500/20',
                border: 'border-blue-500/20',
                icon: FaProjectDiagram
              },
              {
                title: 'Spam Mail Prediction',
                description: 'Developed a robust spam email detection system using Naive Bayes classification. Applied comprehensive text preprocessing and NLP techniques.',
                tags: ['Python', 'Pandas', 'NLP', 'Naive Bayes'],
                gradient: 'from-green-500/20 to-blue-500/20',
                border: 'border-green-500/20',
                icon: FaBrain
              },
              {
                title: 'Car Price Prediction',
                description: 'Built Linear Regression and Random Forest models to predict car prices. Performed extensive EDA and model evaluation using RMSE and MSE metrics.',
                tags: ['Python', 'Pandas', 'NumPy', 'Scikit-learn'],
                gradient: 'from-purple-500/20 to-pink-500/20',
                border: 'border-purple-500/20',
                icon: FaCode
              },
              {
                title: 'R&D Tax Credit Analysis',
                description: 'Analyzed and calculated R&D tax credit details for financial compliance. Updated and verified comprehensive financial data across multiple projects.',
                tags: ['Data Analysis', 'Excel', 'Python', 'Financial'],
                gradient: 'from-orange-500/20 to-red-500/20',
                border: 'border-orange-500/20',
                icon: FaTools
              }
            ].map((project, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${project.gradient} backdrop-blur-sm border ${project.border} rounded-2xl p-8 hover:scale-105 transition-all duration-300 group`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <project.icon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/10 text-white text-sm rounded-full border border-white/20 hover:bg-white/20 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="p-4 bg-blue-500/20 rounded-2xl">
                  <FaEnvelope className="text-blue-400 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">Email</h3>
                  <p className="text-gray-300">kanikshaa@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="p-4 bg-green-500/20 rounded-2xl">
                  <FaPhone className="text-green-400 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">Phone</h3>
                  <p className="text-gray-300">+91 9446880373</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="p-4 bg-purple-500/20 rounded-2xl">
                  <FaMapMarkerAlt className="text-purple-400 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">Location</h3>
                  <p className="text-gray-300">Tamil Nadu, India</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h3 className="text-xl font-semibold text-white mb-6">Follow Me</h3>
                <div className="flex gap-6">
                  <a href="#" className="p-4 bg-slate-800/50 rounded-2xl hover:bg-slate-700/50 transition-colors group">
                    <FaGithub className="text-gray-400 group-hover:text-white text-2xl transition-colors" />
                  </a>
                  <a href="#" className="p-4 bg-slate-800/50 rounded-2xl hover:bg-slate-700/50 transition-colors group">
                    <FaLinkedin className="text-gray-400 group-hover:text-white text-2xl transition-colors" />
                  </a>
                  <a href="#" className="p-4 bg-slate-800/50 rounded-2xl hover:bg-slate-700/50 transition-colors group">
                    <FaTwitter className="text-gray-400 group-hover:text-white text-2xl transition-colors" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-white font-medium mb-2">Full Name</label>
                  <input
                    id="fullName"
                    type="text"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="emailAddress" className="block text-white font-medium mb-2">Email Address</label>
                  <input
                    id="emailAddress"
                    type="email"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white font-medium mb-2">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800/50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Kanikshaa R
          </div>
          <p className="text-gray-400 mb-6">
            AI/ML Engineer & Full-stack Developer • Passionate about creating intelligent solutions
          </p>
          <div className="flex justify-center gap-6 text-sm text-gray-500">
            <span>© 2026 Kanikshaa R</span>
            <span>•</span>
            <span>Made with ❤️ and React</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
