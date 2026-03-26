export default function Skills() {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: [
        { name: 'Python', proficiency: 95 },
        { name: 'C', proficiency: 85 },
        { name: 'HTML5 & CSS3', proficiency: 90 },
        { name: 'SQL', proficiency: 88 },
      ]
    },
    {
      category: 'Machine Learning & AI',
      skills: [
        { name: 'Scikit-learn', proficiency: 92 },
        { name: 'Pandas', proficiency: 93 },
        { name: 'NumPy', proficiency: 90 },
        { name: 'NLP & Text Processing', proficiency: 85 },
      ]
    },
    {
      category: 'Tools & Cloud',
      skills: [
        { name: 'Git & GitHub', proficiency: 90 },
        { name: 'Google Colab', proficiency: 92 },
        { name: 'Docker', proficiency: 80 },
        { name: 'Azure & OCI', proficiency: 85 },
      ]
    },
  ]

  return (
    <section className="px-4 py-20 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Skills & Expertise</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map(category => (
            <div key={category.category} className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{category.category}</h3>

              <div className="space-y-6">
                {category.skills.map(skill => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-800">{skill.name}</span>
                      <span className="text-sm text-gray-600">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full bg-gray-300 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${skill.proficiency}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-12 bg-blue-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Specialized Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Data Analysis',
              'Model Training',
              'Feature Engineering',
              'EDA',
              'Kaggle',
              'Hugging Face',
              'Data Preprocessing',
              'Model Evaluation'
            ].map(skill => (
              <div
                key={skill}
                className="bg-white p-4 rounded-lg text-center border-2 border-blue-200 hover:border-blue-600 transition-colors"
              >
                <p className="font-semibold text-gray-800">{skill}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12 bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: 'Oracle Cloud Infrastructure (OCI)', subtitle: '2025 Certified Associate Generative AI Professional' },
              { title: 'Microsoft Azure Fundamentals', subtitle: 'AZ-900 Certification' },
              { title: 'MongoDB Basics', subtitle: 'MONGO DB Fundamentals' },
              { title: 'Infosys Java Database', subtitle: 'Java Database Connectivity (JDBC)' }
            ].map((cert, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-lg border-l-4 border-blue-600 hover:shadow-md transition-shadow"
              >
                <p className="font-semibold text-gray-900">{cert.title}</p>
                <p className="text-sm text-gray-600 mt-1">{cert.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
