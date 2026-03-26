import { FaArrowDown, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Home({ scrollToSection }) {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Hero Image Placeholder */}
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-5xl font-bold shadow-lg">
            KR
          </div>
        </div>

        {/* Hero Text */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Kanikshaa R</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          AI/ML Engineer & Full-stack Developer
        </p>

        <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
          I build intelligent machine learning solutions and scalable web applications. Passionate about AI, data science, and creating meaningful technological impact.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Get In Touch
          </button>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 justify-center mb-12">
          <a
            href="#"
            className="text-gray-600 hover:text-blue-600 text-2xl transition-colors"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-blue-600 text-2xl transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-blue-600 text-2xl transition-colors"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
        </div>

        {/* Scroll Down Indicator */}
        <div className="animate-bounce">
          <FaArrowDown className="text-blue-600 text-2xl mx-auto" />
        </div>
      </div>
    </section>
  )
}
