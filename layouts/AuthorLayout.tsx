import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = content

  return (
    <>
      {/* Hero Section with Gradient Background */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="text-center">
              {/* Badge */}
              <div className="inline-flex items-center rounded-full bg-primary-100 dark:bg-primary-900/30 px-4 py-2 text-sm font-medium text-primary-700 dark:text-primary-300 mb-6">
                <span className="mr-2">👋</span>
                Get to know me
              </div>

              {/* Title with Gradient */}
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block text-gray-900 dark:text-white">About</span>
                <span className="block bg-gradient-to-r from-primary-600 to-pink-600 bg-clip-text text-transparent">
                  {name}
                </span>
              </h1>

              {/* Subtitle */}
              <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
                Passionate about technology, always learning, and building amazing things
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          {/* Profile Card */}
          <div className="lg:col-span-4">
            <div className="sticky top-8">
              <div className="about-profile-card">
                {/* Avatar with Glow Effect */}
                <div className="relative mb-6">
                  {avatar && (
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-400 to-pink-400 blur-lg opacity-30 animate-pulse"></div>
                      <Image
                        src={avatar}
                        alt="avatar"
                        width={200}
                        height={200}
                        className="relative h-48 w-48 rounded-full border-4 border-white dark:border-gray-700 shadow-xl mx-auto"
                      />
                    </div>
                  )}
                </div>

                {/* Name and Title */}
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{name}</h2>
                  <div className="inline-flex items-center rounded-full bg-primary-100 dark:bg-primary-900/30 px-4 py-2 text-sm font-medium text-primary-700 dark:text-primary-300 mb-2">
                    {occupation}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">{company}</p>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-4 mb-6">
                  <div className="social-link-wrapper">
                    <SocialIcon kind="mail" href={`mailto:${email}`} />
                  </div>
                  <div className="social-link-wrapper">
                    <SocialIcon kind="github" href={github} />
                  </div>
                  <div className="social-link-wrapper">
                    <SocialIcon kind="linkedin" href={linkedin} />
                  </div>
                  <div className="social-link-wrapper">
                    <SocialIcon kind="twitter" href={twitter} />
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                      3+
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                      10+
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="mt-12 lg:col-span-8 lg:mt-0">
            <div className="about-content-wrapper">{children}</div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="bg-gray-50 dark:bg-gray-800/50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Technologies
            </h2>
            <p className="text-gray-600 dark:text-gray-400">Technologies I work with</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Web Development', level: 85, icon: '🌐' },
              { name: 'Mobile Development', level: 75, icon: '📱' },
              { name: 'Desktop Programming', level: 60, icon: '💻' },
              { name: 'Graphic Design', level: 80, icon: '🎨' },
            ].map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="text-3xl mb-3">{skill.icon}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{skill.name}</h3>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-primary-500 to-pink-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{skill.level}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
