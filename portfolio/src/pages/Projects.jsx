// src/pages/Projects.jsx
import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      title: 'License Monitoring Tool',
      description: 'Full-stack MERN application for senior management data visualization',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      type: 'Development'
    },
    {
      title: 'AR Information Display',
      description: 'Augmented Reality application for CSE department data visualization',
      tags: ['Unity', 'ARCore', '3D Modeling'],
      type: 'Development'
    },
    {
      title: 'QR Attendance System',
      description: 'Mobile and web application for dynamic QR-based attendance tracking',
      tags: ['Java', 'Firebase', 'Python'],
      type: 'Development'
    },
    {
      title: 'AI Document Analyzer',
      description: 'Intelligent system for analyzing and extracting insights from documents using RAG architecture',
      tags: ['LangChain', 'OpenAI', 'Vector DB'],
      type: 'AI'
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Projects</h1>
        <p className="text-xl text-gray-600">A collection of my development and AI projects</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-6">
              <span className={`inline-block px-2 py-1 text-sm rounded-full mb-4 ${
                project.type === 'AI' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
              }`}>
                {project.type}
              </span>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects