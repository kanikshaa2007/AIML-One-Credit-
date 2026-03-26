import { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    
    // Reset success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="px-4 py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Get In Touch</h2>
        <p className="text-gray-600 text-center mb-12 text-lg">
          I'd love to hear from you. Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Email */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                  <FaEnvelope />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600 mt-1">
                  <a href="mailto:kanikshaa@gmail.com" className="hover:text-blue-600 transition-colors">
                    kanikshaa@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                  <FaPhone />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                <p className="text-gray-600 mt-1">
                  <a href="tel:+919446880373" className="hover:text-blue-600 transition-colors">
                    +91 9446880373
                  </a>
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                  <FaMapMarkerAlt />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Location</h3>
                <p className="text-gray-600 mt-1">Tamil Nadu, India</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Me</h3>
              <div className="flex gap-6">
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 text-3xl transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 text-3xl transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 text-3xl transition-colors"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            {submitted && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-900 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                  placeholder="What is this about?"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Your message here..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
