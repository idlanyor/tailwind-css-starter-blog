import projectsData from '@/data/projectsData'
import stackData from '@/data/stackData'
import CertificateCard from '@/components/CertificateCard'
import CardTools from '@/components/CardTools'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'Experience',
  description: 'My professional experience, certifications, and technical skills',
})

export default function Experience() {
  // Group stack data by level
  const groupedStack = stackData.reduce(
    (acc, item) => {
      const level = item.description
      if (!acc[level]) acc[level] = []
      acc[level].push(item)
      return acc
    },
    {} as Record<string, typeof stackData>
  )

  const levelOrder = ['Advanced', 'Intermediate', 'Beginner']
  const levelColors = {
    Advanced: 'from-green-500 to-emerald-500',
    Intermediate: 'from-blue-500 to-cyan-500',
    Beginner: 'from-orange-500 to-yellow-500',
  }

  const levelIcons = {
    Advanced: '🚀',
    Intermediate: '⚡',
    Beginner: '🌱',
  }

  return (
    <>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="text-center">
              {/* Badge */}
              <div className="inline-flex items-center rounded-full bg-primary-100 dark:bg-primary-900/30 px-4 py-2 text-sm font-medium text-primary-700 dark:text-primary-300 mb-6">
                <span className="mr-2">💼</span>
                Professional Journey
              </div>

              {/* Title with Gradient */}
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block text-gray-900 dark:text-white">My</span>
                <span className="block bg-gradient-to-r from-primary-600 to-pink-600 bg-clip-text text-transparent">
                  Experience
                </span>
              </h1>

              {/* Subtitle */}
              <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
                Certifications, skills, and technical expertise gained through continuous learning
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Experience Stats */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="experience-stat-card">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                {projectsData.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Certifications</div>
            </div>
            <div className="experience-stat-card">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                {stackData.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
            </div>
            <div className="experience-stat-card">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                {groupedStack['Advanced']?.length || 0}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Advanced Skills</div>
            </div>
            <div className="experience-stat-card">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">3+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Years Learning</div>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900/30 px-4 py-2 text-sm font-medium text-green-700 dark:text-green-300 mb-4">
              <span className="mr-2">🏆</span>
              Regular Certifications
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Certificates & Achievements
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Continuous learning through various platforms and institutions
            </p>
          </div>

          {/* Improved Grid Layout */}
          <div className="certificates-grid">
            {projectsData.map((cert, index) => (
              <CertificateCard
                key={cert.title}
                title={cert.title}
                description={cert.description}
                imgSrc={cert.imgSrc}
                href={cert.href}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Tech Stack Section */}
        <div>
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/30 px-4 py-2 text-sm font-medium text-blue-700 dark:text-blue-300 mb-4">
              <span className="mr-2">⚡</span>
              Technical Expertise
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Tech Stack & Skills
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Technologies and programming languages I work with
            </p>
          </div>

          {/* Skills by Level */}
          {levelOrder.map((level) => {
            const skills = groupedStack[level]
            if (!skills || skills.length === 0) return null

            return (
              <div key={level} className="mb-12">
                <div className="flex items-center mb-6">
                  <div
                    className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${levelColors[level]} text-white font-medium shadow-lg`}
                  >
                    <span className="mr-2">{levelIcons[level]}</span>
                    {level} Level
                    <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">
                      {skills.length}
                    </span>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                  {skills.map((skill, index) => (
                    <div
                      key={skill.title}
                      className="experience-skill-card"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                          {skill.title}
                        </h3>
                        <div
                          className={`w-3 h-3 rounded-full bg-gradient-to-r ${levelColors[level]}`}
                        ></div>
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        {skill.description}
                      </div>

                      {/* Progress bar */}
                      <div className="mt-3 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                        <div
                          className={`h-1.5 rounded-full bg-gradient-to-r ${levelColors[level]} transition-all duration-1000 ease-out`}
                          style={{
                            width:
                              level === 'Advanced'
                                ? '90%'
                                : level === 'Intermediate'
                                ? '70%'
                                : '50%',
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-20">
          <div className="experience-cta-section">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Let's Work Together
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Interested in collaborating or learning more about my experience? Feel free to reach
                out and let's discuss opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/about"
                  className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  View Profile
                  <span className="ml-2">→</span>
                </a>
                <a
                  href="/projects"
                  className="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  View Projects
                  <span className="ml-2">🚀</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
