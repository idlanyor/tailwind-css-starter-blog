import Link from '@/components/Link'
import Tag from '@/components/Tag'
import { slug } from 'github-slugger'
import tagData from 'app/tag-data.json'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'Tags',
  description: 'Jelajahi artikel berdasarkan topik dan kategori yang menarik',
})

export default async function Page() {
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])
  const totalPosts = Object.values(tagCounts).reduce((sum, count) => sum + count, 0)
  const totalTags = tagKeys.length

  // Group tags by popularity
  const popularTags = sortedTags.slice(0, 6)
  const otherTags = sortedTags.slice(6)

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 mb-16">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-8">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              />
            </svg>
            Eksplorasi Topik
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Jelajahi Artikel
            <span className="block bg-gradient-to-r from-primary-600 to-pink-600 bg-clip-text text-transparent">
              Berdasarkan Tags
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Temukan artikel menarik dari {totalTags} kategori berbeda dengan total {totalPosts}{' '}
            artikel yang telah dipublikasikan
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                {totalTags}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Total Tags</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                {totalPosts}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                Total Artikel
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                {Math.max(...Object.values(tagCounts))}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                Artikel Terbanyak
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {tagKeys.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
              <svg
                className="w-12 h-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Tidak ada tags ditemukan
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Belum ada tags yang tersedia saat ini.
            </p>
          </div>
        ) : (
          <>
            {/* Popular Tags Section */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Tags Populer
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  Tags dengan artikel terbanyak yang paling sering dibaca
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {popularTags.map((tag, index) => {
                  const count = tagCounts[tag]
                  const percentage = Math.round((count / totalPosts) * 100)

                  return (
                    <Link
                      key={tag}
                      href={`/tags/${slug(tag)}`}
                      className="group block"
                      aria-label={`View ${count} posts tagged ${tag}`}
                    >
                      <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                          <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>

                        {/* Rank Badge */}
                        <div className="absolute top-4 right-4">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                              index === 0
                                ? 'bg-yellow-500'
                                : index === 1
                                ? 'bg-gray-400'
                                : index === 2
                                ? 'bg-orange-500'
                                : 'bg-primary-500'
                            }`}
                          >
                            #{index + 1}
                          </div>
                        </div>

                        <div className="relative">
                          {/* Tag Icon */}
                          <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                            <svg
                              className="w-6 h-6 text-primary-600 dark:text-primary-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>

                          {/* Tag Name */}
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 capitalize group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                            {tag}
                          </h3>

                          {/* Stats */}
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                                {count}
                              </div>
                              <div className="text-sm text-gray-500 dark:text-gray-400">
                                artikel
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                                {percentage}%
                              </div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">
                                dari total
                              </div>
                            </div>
                          </div>

                          {/* Progress Bar */}
                          <div className="mt-4">
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                              <div
                                className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-500 group-hover:from-primary-400 group-hover:to-primary-500"
                                style={{ width: `${percentage}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Other Tags Section */}
            {otherTags.length > 0 && (
              <div className="mb-16">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Semua Tags
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Jelajahi semua topik dan kategori artikel yang tersedia
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex flex-wrap gap-4">
                    {sortedTags.map((tag) => {
                      const count = tagCounts[tag]
                      return (
                        <Link
                          key={tag}
                          href={`/tags/${slug(tag)}`}
                          className="group inline-flex items-center px-4 py-2 bg-gray-50 dark:bg-gray-700 rounded-full hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-200 hover:scale-105"
                          aria-label={`View ${count} posts tagged ${tag}`}
                        >
                          <span className="text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 font-medium capitalize">
                            {tag}
                          </span>
                          <span className="ml-2 px-2 py-0.5 bg-gray-200 dark:bg-gray-600 group-hover:bg-primary-100 dark:group-hover:bg-primary-800 text-gray-600 dark:text-gray-300 group-hover:text-primary-700 dark:group-hover:text-primary-300 text-xs font-semibold rounded-full transition-colors duration-200">
                            {count}
                          </span>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* Call to Action */}
            <div className="text-center py-16 bg-gradient-to-r from-primary-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Tidak menemukan topik yang dicari?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Jelajahi semua artikel kami atau gunakan fitur pencarian untuk menemukan konten yang
                sesuai dengan minat Anda
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/blog"
                  className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                  Lihat Semua Artikel
                </Link>
                <button className="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  Cari Artikel
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}
