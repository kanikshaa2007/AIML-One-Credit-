import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import App from '../App'

// Mock react-icons to avoid import issues in tests
vi.mock('react-icons/fa', () => ({
  FaGithub: () => <div data-testid="github-icon">GitHub</div>,
  FaLinkedin: () => <div data-testid="linkedin-icon">LinkedIn</div>,
  FaTwitter: () => <div data-testid="twitter-icon">Twitter</div>,
  FaEnvelope: () => <div data-testid="envelope-icon">Envelope</div>,
  FaPhone: () => <div data-testid="phone-icon">Phone</div>,
  FaMapMarkerAlt: () => <div data-testid="map-icon">Map</div>,
  FaCode: () => <div data-testid="code-icon">Code</div>,
  FaBrain: () => <div data-testid="brain-icon">Brain</div>,
  FaTools: () => <div data-testid="tools-icon">Tools</div>,
  FaProjectDiagram: () => <div data-testid="project-icon">Project</div>,
  FaGraduationCap: () => <div data-testid="graduation-icon">Graduation</div>,
  FaAward: () => <div data-testid="award-icon">Award</div>,
  FaStar: () => <div data-testid="star-icon">Star</div>,
  FaArrowDown: () => <div data-testid="arrow-icon">Arrow</div>,
  FaChevronRight: () => <div data-testid="chevron-icon">Chevron</div>,
}))

describe('Portfolio App - Core Functionality', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('Basic Rendering', () => {
    it('renders without crashing', () => {
      expect(() => render(<App />)).not.toThrow()
    })

    it('displays main heading', () => {
      render(<App />)
      expect(screen.getByText('Hi, I\'m Kanikshaa R')).toBeInTheDocument()
    })

    it('shows profession title', () => {
      render(<App />)
      expect(screen.getByText('AI/ML Engineer & Full-stack Developer')).toBeInTheDocument()
    })

    it('displays all main sections', () => {
      render(<App />)
      expect(screen.getByText('About Me')).toBeInTheDocument()
      expect(screen.getByText('Skills & Expertise')).toBeInTheDocument()
      expect(screen.getByText('Featured Projects')).toBeInTheDocument()
      // Check for contact section heading instead of button text
      expect(screen.getByRole('heading', { name: /Get In Touch/i })).toBeInTheDocument()
    })
  })

  describe('Hero Section', () => {
    it('shows call-to-action buttons', () => {
      render(<App />)
      // Check for specific button roles instead of text
      const viewWorkButtons = screen.getAllByRole('button', { name: /View My Work/i })
      expect(viewWorkButtons.length).toBeGreaterThan(0)
      // There are multiple "Get In Touch" buttons
      const getInTouchButtons = screen.getAllByRole('button', { name: 'Get In Touch' })
      expect(getInTouchButtons.length).toBeGreaterThan(0)
    })

    it('displays animated avatar', () => {
      render(<App />)
      expect(screen.getByText('KR')).toBeInTheDocument()
    })
  })

  describe('About Section', () => {
    it('displays personal description', () => {
      render(<App />)
      expect(screen.getByText(/I'm an AI\/ML student and developer/)).toBeInTheDocument()
    })

    it('shows statistics', () => {
      render(<App />)
      expect(screen.getByText('8')).toBeInTheDocument() // Projects
      expect(screen.getByText('8.47')).toBeInTheDocument() // CGPA
      expect(screen.getByText('5+')).toBeInTheDocument() // Certifications
      expect(screen.getByText('15+')).toBeInTheDocument() // Skills
    })

    it('displays education info', () => {
      render(<App />)
      expect(screen.getByText('B.E in Computational Intelligence and Machine Learning')).toBeInTheDocument()
    })
  })

  describe('Skills Section', () => {
    it('renders skill categories', () => {
      render(<App />)
      expect(screen.getByText('Programming')).toBeInTheDocument()
      expect(screen.getByText('ML/AI')).toBeInTheDocument()
      expect(screen.getByText('Tools & Cloud')).toBeInTheDocument()
    })

    it('shows skill levels', () => {
      render(<App />)
      // Check for skills within the skills section specifically
      expect(screen.getByText('95%')).toBeInTheDocument()
      // Scikit-learn appears in skills and projects sections
      const scikitLearnElements = screen.getAllByText('Scikit-learn')
      expect(scikitLearnElements.length).toBeGreaterThan(0)
      // Multiple skills have 92% proficiency
      const ninetyTwoPercentElements = screen.getAllByText(/92\s*%/)
      expect(ninetyTwoPercentElements.length).toBeGreaterThan(0)
    })

    it('displays certifications', () => {
      render(<App />)
      expect(screen.getByText('Oracle Cloud Infrastructure')).toBeInTheDocument()
      expect(screen.getByText('Microsoft Azure')).toBeInTheDocument()
      expect(screen.getByText('MongoDB')).toBeInTheDocument()
    })
  })

  describe('Projects Section', () => {
    it('displays all projects', () => {
      render(<App />)
      expect(screen.getByText('Interoperable EHR System')).toBeInTheDocument()
      expect(screen.getByText('Spam Mail Prediction')).toBeInTheDocument()
      expect(screen.getByText('Car Price Prediction')).toBeInTheDocument()
      expect(screen.getByText('R&D Tax Credit Analysis')).toBeInTheDocument()
    })

    it('shows technologies', () => {
      render(<App />)
      // Check for project-specific technologies
      expect(screen.getByText('FastAPI')).toBeInTheDocument()
      // NLP appears in skills and projects sections
      const nlpElements = screen.getAllByText('NLP')
      expect(nlpElements.length).toBeGreaterThan(0)
      expect(screen.getByText('Data Analysis')).toBeInTheDocument()
      expect(screen.getByText('Excel')).toBeInTheDocument()
    })
  })

  describe('Contact Section', () => {
    it('displays contact info', () => {
      render(<App />)
      expect(screen.getByText('kanikshaa@gmail.com')).toBeInTheDocument()
      expect(screen.getByText('+91 9446880373')).toBeInTheDocument()
      expect(screen.getByText('Tamil Nadu, India')).toBeInTheDocument()
    })

    it('shows social icons', () => {
      render(<App />)
      expect(screen.getByTestId('github-icon')).toBeInTheDocument()
      expect(screen.getByTestId('linkedin-icon')).toBeInTheDocument()
      expect(screen.getByTestId('twitter-icon')).toBeInTheDocument()
    })

    it('has submit button', () => {
      render(<App />)
      expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
    })
  })

  describe('Navigation', () => {
    it('renders nav menu', () => {
      render(<App />)
      const navElement = document.querySelector('nav')
      expect(navElement).toBeInTheDocument()
    })

    it('has section links', () => {
      render(<App />)
      const navLinks = ['home', 'about', 'skills', 'projects', 'contact']
      navLinks.forEach(link => {
        expect(screen.getByText(link)).toBeInTheDocument()
      })
    })
  })

  describe('Footer', () => {
    it('displays footer content', () => {
      render(<App />)
      expect(screen.getByText('© 2026 Kanikshaa R')).toBeInTheDocument()
      expect(screen.getByText('Made with ❤️ and React')).toBeInTheDocument()
    })
  })

  describe('Interactions', () => {
    it('navigates between sections', () => {
      const mockScrollIntoView = vi.fn()
      Element.prototype.scrollIntoView = mockScrollIntoView

      render(<App />)
      const aboutNav = screen.getByText('about')
      fireEvent.click(aboutNav)

      expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' })
    })

    it('buttons are enabled', () => {
      render(<App />)
      const buttons = screen.getAllByRole('button')
      buttons.forEach(button => {
        expect(button).toBeEnabled()
      })
    })
  })

  describe('Accessibility', () => {
    it('has proper headings', () => {
      render(<App />)
      const headings = screen.getAllByRole('heading')
      expect(headings.length).toBeGreaterThan(0)
    })

    it('buttons have descriptive text', () => {
      render(<App />)
      const viewWorkButtons = screen.getAllByRole('button', { name: /View My Work/i })
      expect(viewWorkButtons.length).toBeGreaterThan(0)
      // There are multiple "Get In Touch" buttons (hero and contact sections)
      const getInTouchButtons = screen.getAllByRole('button', { name: 'Get In Touch' })
      expect(getInTouchButtons.length).toBeGreaterThan(0)
      expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
    })
  })

  describe('Visual Elements', () => {
    it('applies gradients', () => {
      render(<App />)
      const gradientElements = document.querySelectorAll('[class*="gradient"]')
      expect(gradientElements.length).toBeGreaterThan(0)
    })

    it('has animations', () => {
      render(<App />)
      const animatedElements = document.querySelectorAll('[class*="animate"]')
      expect(animatedElements.length).toBeGreaterThan(0)
    })

    it('uses dark theme', () => {
      render(<App />)
      const darkElements = document.querySelectorAll('[class*="slate-900"], [class*="slate-800"]')
      expect(darkElements.length).toBeGreaterThan(0)
    })
  })
})