import { FaHeart } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Kanikshaa R</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              An AI/ML engineer and full-stack developer passionate about building intelligent systems 
              and solving real-world problems with cutting-edge technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Email: kanikshaa@gmail.com</li>
              <li>Phone: +91 9446880373</li>
              <li>Location: Tamil Nadu, India</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p className="flex items-center gap-1 mb-4 md:mb-0">
              © {currentYear} Kanikshaa R. Made with <FaHeart className="text-red-500" /> and React
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
