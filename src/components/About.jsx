export default function About() {
  return (
    <section className="px-4 py-20 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              I'm an AI/ML student and developer with hands-on experience in machine learning, 
              data science, and full-stack development. I'm passionate about building intelligent systems 
              that solve real-world problems.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Currently pursuing B.E in Computational Intelligence and Machine Learning, 
              I've worked on diverse projects including EHR systems, spam detection, and price prediction models. 
              I'm eager to contribute my AI/ML knowledge and technical skills to impactful solutions.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              I love exploring cutting-edge AI technologies, cloud infrastructure, and building applications 
              that make a difference. Always learning, always growing.
            </p>

            <div className="flex flex-col gap-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Education</h3>
                <p className="text-gray-700">B.E in Computational Intelligence and Machine Learning</p>
                <p className="text-gray-500 text-sm">K.S Ranganayaki College of Technology, TamilNadu (Expected 2028)</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Current Role</h3>
                <p className="text-gray-700">AI/ML Intern & Professional Developer</p>
                <p className="text-gray-500 text-sm">2025 - Present</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-8 rounded-lg text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">8</p>
              <p className="text-gray-700 font-medium">Projects Built</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-100 to-indigo-50 p-8 rounded-lg text-center">
              <p className="text-4xl font-bold text-indigo-600 mb-2">5+</p>
              <p className="text-gray-700 font-medium">Certifications</p>
            </div>

            <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-8 rounded-lg text-center">
              <p className="text-4xl font-bold text-purple-600 mb-2">15+</p>
              <p className="text-gray-700 font-medium">Technical Skills</p>
            </div>

            <div className="bg-gradient-to-br from-pink-100 to-pink-50 p-8 rounded-lg text-center">
              <p className="text-4xl font-bold text-pink-600 mb-2">8.47</p>
              <p className="text-gray-700 font-medium">Academic CGPA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
