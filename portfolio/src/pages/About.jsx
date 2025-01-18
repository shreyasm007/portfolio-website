// src/pages/About.jsx
import { motion } from 'framer-motion'

const About = () => {
  const education = [
    {
      school: "Walchand College of Engineering, Sangli",
      degree: "B.Tech in Computer Science and Engineering",
      year: "2020-2024",
      score: "CGPA - 8.34"
    },
    {
      school: "Ligade Patil Jr. College of Science, Karad",
      degree: "HSC Class 12th (PCM)",
      year: "2020",
      score: "Percentage - 95.23"
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">About Me</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            I am a Computer Science graduate with a passion for building intelligent solutions 
            that combine traditional software development with cutting-edge AI technologies. 
            My journey began with full-stack development, and I'm now expanding into the 
            exciting field of Generative AI.
          </p>

          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <div className="space-y-6">
            {education.map((edu) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="font-semibold text-lg">{edu.school}</h3>
                <p className="text-gray-600">{edu.degree}</p>
                <p className="text-gray-500">{edu.year}</p>
                <p className="text-gray-500">{edu.score}</p>
              </motion.div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">Professional Journey</h2>
          <p className="text-gray-600 mb-4">
            Currently working as a Project Intern at Emerson Innovation Center, Pune, 
            where I've developed full-stack applications and gained valuable experience 
            in modern web technologies. I'm actively exploring the intersection of 
            traditional development and AI, focusing on areas like:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-8">
            <li>Large Language Model Integration</li>
            <li>Retrieval Augmented Generation (RAG)</li>
            <li>Prompt Engineering</li>
            <li>AI Application Architecture</li>
          </ul>
        </div>
      </motion.div>
    </div>
  )
}

export default About