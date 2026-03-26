import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Header({ scrollToSection, activeSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ]

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId)
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">Kanikshaa R</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-sm font-medium transition-colors ${
                activeSection === item.id
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t flex flex-col gap-4 px-4 py-4">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-left font-medium transition-colors py-2 ${
                activeSection === item.id
                  ? 'text-blue-600 border-l-2 border-blue-600 pl-4'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  )
}
