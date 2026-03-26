import { FaGithub, FaExternalAltLink } from 'react-icons/fa'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Interoperable Electronic Health Record (EHR) System',
      description: 'Built an end-to-end EHR solution with data preprocessing, feature engineering, and pipeline design. Trained and optimized models like Random Forest, Logistic Regression, and XGBoost using cross-validation techniques. Performed comprehensive EDA and model evaluation.',
      tags: ['Python', 'FastAPI', 'Scikit-learn', 'Random Forest', 'XGBoost'],
      github: '#',
      demo: '#',
      image: 'bg-gradient-to-r from-blue-400 to-blue-600'
    },
    {
      id: 2,
      title: 'Spam Mail Prediction System',
      description: 'Developed a robust spam email detection system using Naive Bayes classification. Applied comprehensive text preprocessing and NLP techniques including text cleaning and feature extraction. Trained, refined and evaluated the model using various performance metrics.',
      tags: ['Python', 'Pandas', 'Scikit-learn', 'NLP', 'Naive Bayes'],
      github: '#',
      demo: '#',
      image: 'bg-gradient-to-r from-green-400 to-green-600'
    },
    {
      id: 3,
      title: 'Car Price Prediction Model',
      description: 'Built a Linear Regression and Random Forest Regressor model to predict car prices. Performed extensive exploratory data analysis. Applied label encoding and numerical feature transformation using Pandas and NumPy. Evaluated models using RMSE and MSE metrics.',
      tags: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Seaborn'],
      github: '#',
      demo: '#',
      image: 'bg-gradient-to-r from-purple-400 to-purple-600'
    },
    {
      id: 4,
      title: 'R&D Tax Credit Analysis System',
      description: 'Analyzed and calculated R&D tax credit details for financial compliance. Updated and verified comprehensive financial data across multiple projects. Developed detailed reports on project-wise R&D expenses and ensured accuracy through meticulous documentation.',
      tags: ['Data Analysis', 'Financial Analysis', 'Excel', 'Python'],
      github: '#',
      demo: '#',
      image: 'bg-gradient-to-r from-pink-400 to-pink-600'
    },
    {
      id: 5,
      title: 'AI/ML Workflow Deployment',
      description: 'Completed extensive training on artificial intelligence and machine learning workflows. Gained hands-on exposure to data preprocessing, model development, and cloud-based deployment environments. Explored generative AI applications and real-world AI system implementations.',
      tags: ['Python', 'Google Colab', 'ML Workflows', 'Data Preprocessing', 'GenAI'],
      github: '#',
      demo: '#',
      image: 'bg-gradient-to-r from-orange-400 to-orange-600'
    },
    {
      id: 6,
      title: 'Cloud Infrastructure & AI Solutions',
      description: 'Hands-on experience with cloud-based AI development and deployment. Explored Oracle Cloud Infrastructure and Microsoft Azure platforms. Worked with Python-based machine learning tools and cloud development environments for scalable AI applications.',
      tags: ['Azure', 'OCI', 'Cloud Computing', 'Docker', 'ML Deployment'],
      github: '#',
      demo: '#',
      image: 'bg-gradient-to-r from-cyan-400 to-cyan-600'
    },
  ]

  return (
    <section className="px-4 py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Featured Projects</h2>
        <p className="text-gray-600 text-center mb-12 text-lg">
          Here are some of my recent works and key projects
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Project Image */}
              <div className={`${project.image} h-40`} />

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors font-medium"
                  >
                    <FaGithub /> Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors font-medium"
                  >
                    <FaExternalAltLink /> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
