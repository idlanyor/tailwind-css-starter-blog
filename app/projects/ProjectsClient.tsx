'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FiGithub, FiExternalLink, FiStar, FiGitBranch, FiCalendar, FiCode } from 'react-icons/fi'

interface Repository {
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
  created_at: string
  updated_at: string
  topics: string[]
  archived: boolean
  fork: boolean
}

const GITHUB_USERNAME = 'idlanyor'

export default function ProjectsClient() {
  const [repositories, setRepositories] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [filter, setFilter] = useState<'all' | 'original' | 'forks'>('all')

  useEffect(() => {
    async function fetchRepositories() {
      try {
        setLoading(true)
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
          {
            headers: {
              Accept: 'application/vnd.github.v3+json',
            },
          }
        )

        if (!response.ok) {
          throw new Error('Failed to fetch repositories')
        }

        const data: Repository[] = await response.json()

        // Filter out archived repositories and sort by stars
        const filteredData = data
          .filter((repo) => !repo.archived)
          .sort((a, b) => b.stargazers_count - a.stargazers_count)

        setRepositories(filteredData)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchRepositories()
  }, [])

  const filteredRepositories = repositories.filter((repo) => {
    if (filter === 'original') return !repo.fork
    if (filter === 'forks') return repo.fork
    return true
  })

  const getLanguageColor = (language: string | null) => {
    const colors: { [key: string]: string } = {
      JavaScript: '#f1e05a',
      TypeScript: '#2b7489',
      Python: '#3572A5',
      Java: '#b07219',
      'C++': '#f34b7d',
      C: '#555555',
      HTML: '#e34c26',
      CSS: '#1572B6',
      PHP: '#4F5D95',
      Go: '#00ADD8',
      Rust: '#dea584',
      Swift: '#ffac45',
      Kotlin: '#F18E33',
      Dart: '#00B4AB',
      Ruby: '#701516',
      Shell: '#89e051',
    }
    return colors[language || ''] || '#6b7280'
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  if (loading) {
    return (
      <div className="animate-pulse">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded mb-4 w-3/4"></div>
              <div className="flex gap-2">
                <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                <div className="h-6 w-12 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-red-500 dark:text-red-400 mb-4">
          <FiGithub className="mx-auto h-12 w-12 mb-4" />
          <p className="text-lg font-semibold">Failed to load repositories</p>
          <p className="text-sm">{error}</p>
        </div>
        <button
          onClick={() => window.location.reload()}
          className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    )
  }

  return (
    <div>
      {/* Stats Section */}
      <div className="mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
              {repositories.length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Total Repos</div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
              {repositories.reduce((acc, repo) => acc + repo.stargazers_count, 0)}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Total Stars</div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
              {repositories.reduce((acc, repo) => acc + repo.forks_count, 0)}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Total Forks</div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
              {new Set(repositories.map((repo) => repo.language).filter(Boolean)).size}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Languages</div>
          </div>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {[
            { key: 'all', label: 'All Repositories', count: repositories.length },
            {
              key: 'original',
              label: 'Original',
              count: repositories.filter((r) => !r.fork).length,
            },
            { key: 'forks', label: 'Forks', count: repositories.filter((r) => r.fork).length },
          ].map(({ key, label, count }) => (
            <button
              key={key}
              onClick={() => setFilter(key as 'all' | 'original' | 'forks')}
              className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === key
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {label}
              <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">{count}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Repositories Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredRepositories.map((repo) => (
          <div key={repo.id} className="project-card group">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {repo.name}
                </h3>
                {repo.fork && (
                  <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full mt-1">
                    <FiGitBranch className="mr-1 h-3 w-3" />
                    Fork
                  </span>
                )}
              </div>
              <div className="flex space-x-2">
                <Link
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                >
                  <FiGithub className="h-5 w-5" />
                </Link>
                {repo.homepage && (
                  <Link
                    href={repo.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                  >
                    <FiExternalLink className="h-5 w-5" />
                  </Link>
                )}
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
              {repo.description || 'No description available'}
            </p>

            {/* Topics */}
            {repo.topics && repo.topics.length > 0 && (
              <div className="flex flex-wrap gap-1 mb-4">
                {repo.topics.slice(0, 3).map((topic) => (
                  <span
                    key={topic}
                    className="inline-flex items-center px-2 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
                  >
                    {topic}
                  </span>
                ))}
                {repo.topics.length > 3 && (
                  <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full">
                    +{repo.topics.length - 3}
                  </span>
                )}
              </div>
            )}

            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center space-x-4">
                {repo.language && (
                  <div className="flex items-center">
                    <div
                      className="w-3 h-3 rounded-full mr-2"
                      style={{ backgroundColor: getLanguageColor(repo.language) }}
                    ></div>
                    <span>{repo.language}</span>
                  </div>
                )}
                <div className="flex items-center">
                  <FiStar className="mr-1 h-4 w-4" />
                  <span>{repo.stargazers_count}</span>
                </div>
                <div className="flex items-center">
                  <FiGitBranch className="mr-1 h-4 w-4" />
                  <span>{repo.forks_count}</span>
                </div>
              </div>
              <div className="flex items-center">
                <FiCalendar className="mr-1 h-4 w-4" />
                <span>{formatDate(repo.updated_at)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredRepositories.length === 0 && (
        <div className="text-center py-12">
          <FiCode className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            No repositories found
          </p>
          <p className="text-gray-600 dark:text-gray-400">Try adjusting your filter</p>
        </div>
      )}
    </div>
  )
}
