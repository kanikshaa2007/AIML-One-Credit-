# Personal Portfolio - Kanikshaa R

A modern, responsive personal portfolio website built with React, Vite, and Tailwind CSS showcasing AI/ML projects and expertise.

## Features

- ✨ **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- 🎨 **Modern Styling** - Beautiful gradient backgrounds and smooth transitions using Tailwind CSS
- 📱 **Mobile Navigation** - Hamburger menu for smaller screens
- 🚀 **Smooth Scrolling** - Smooth navigation between sections
- 📊 **Multiple Sections**:
  - Home - Hero section with CTA buttons and social links
  - About - Personal information, education, and statistics
  - Projects - Showcase of 6 featured AI/ML projects
  - Skills - Technical skills with proficiency bars and certifications
  - Contact - Contact form and social links
- 🎯 **Interactive Elements** - Form validation, hover effects, and animations
- 🔧 **Fully Customizable** - Easy to update with your own content

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library
- **TypeScript** - Type safety (configured but optional to use)

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The portfolio will open in your browser at `http://localhost:3000` by default.

## Testing

This portfolio includes a comprehensive test suite to ensure quality and prevent regressions.

### Running Tests

```bash
# Run all tests
npm run test:run

# Run tests in watch mode (during development)
npm test

# Run tests with UI
npm run test:ui

# Run tests with coverage report
npm run test:coverage

# Quick test runner with summary
node test-runner.js
```

### Test Coverage

The test suite covers:
- ✅ **Component Rendering** - All sections render correctly
- ✅ **User Interactions** - Buttons, forms, and navigation work
- ✅ **Accessibility** - Proper ARIA labels and semantic HTML
- ✅ **Visual Elements** - Gradients, animations, and styling
- ✅ **Responsive Design** - Mobile and desktop layouts
- ✅ **Performance** - No memory leaks or performance issues

### Test Structure

```
src/test/
├── App.test.tsx          # Main component tests
├── setup.ts             # Test configuration
└── README.md            # Detailed test documentation
```

## Project Structure

```
src/
├── components/
│   ├── Header.jsx       - Navigation header with mobile menu
│   ├── Home.jsx         - Hero section
│   ├── About.jsx        - About section with stats
│   ├── Projects.jsx     - Projects showcase
│   ├── Skills.jsx       - Skills with proficiency bars
│   ├── Contact.jsx      - Contact form
│   └── Footer.jsx       - Footer
├── App.jsx              - Main app component
├── main.jsx             - Entry point
├── index.css            - Global styles and Tailwind imports
```

## Customization

Your portfolio is already configured with your information! Here's what's included:

1. **Home Section** - Your name, title, bio, and social media links
2. **About Section** - Education details, academic statistics, and professional summary
3. **Projects Section** - 6 of your AI/ML projects with descriptions and technologies
4. **Skills Section** - ML/AI focused skills with proficiency indicators and certifications
5. **Contact Section** - Your email (kanikshaa@gmail.com), phone, and contact form

### To Further Customize:

Edit individual components in `src/components/`:

1. **Home** ([src/components/Home.jsx](src/components/Home.jsx)) - Update social media links (GitHub, LinkedIn, Twitter)
2. **About** ([src/components/About.jsx](src/components/About.jsx)) - Modify bio and statistics
3. **Projects** ([src/components/Projects.jsx](src/components/Projects.jsx)) - Add GitHub/demo links to your actual projects
4. **Skills** ([src/components/Skills.jsx](src/components/Skills.jsx)) - Update proficiency levels, add/remove skills
5. **Contact** ([src/components/Contact.jsx](src/components/Contact.jsx)) - Connect form to email service
6. **Colors** ([tailwind.config.js](tailwind.config.js)) - Customize the color scheme

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## Preview Production Build

```bash
npm run preview
```

## Styling

The portfolio uses Tailwind CSS for styling. You can customize colors and theme in `tailwind.config.js`.

### Key Tailwind Classes Used:
- `bg-gradient-to-*` - Gradient backgrounds
- `hover:` - Hover effects
- `md:` - Responsive breakpoints
- `transition-*` - Smooth animations
- `shadow-*` - Shadow effects

## Form Handling

The contact form currently logs data to the console. To make it functional:

1. **Email Service Integration**:
   - Use services like EmailJS, SendGrid, or Formspree
   - Update the `handleSubmit` function in [Contact.jsx](src/components/Contact.jsx)

Example with EmailJS:
```javascript
import emailjs from '@emailjs/browser';

const handleSubmit = (e) => {
  e.preventDefault();
  emailjs.send('service_id', 'template_id', formData, 'public_key')
    .then(() => setSubmitted(true));
};
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Tips

1. Optimize images in the project section
2. Use lazy loading for heavy components
3. Consider code splitting for larger sections
4. Cache static assets

## Deployment Options

- **Vercel** - Recommended for Vite projects
- **Netlify** - Great for static sites
- **GitHub Pages** - Free hosting
- **AWS S3 + CloudFront** - Enterprise solution

### Deploy to Vercel:
```bash
npm install -g vercel
vercel
```

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please open an issue on GitHub or contact me at kanikshaa@gmail.com.

---

**Made with ❤️ by Kanikshaa R**
