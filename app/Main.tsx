import Link from '@/components/Link'
import Tag from '@/components/Tag'
import Image from '@/components/Image'
import siteMetadata from '@/data/siteMetadata'
// import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-2xl mb-12">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative px-6 py-16 sm:px-12 sm:py-20 lg:px-16">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              Welcome to RoiDev Blog
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl lg:text-6xl">
              <span className="block">Let's Build</span>
              <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                World of Coding
              </span>
              <span className="block text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-600 dark:text-gray-300">
                Anywhere & Anytime
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl leading-8 text-gray-600 dark:text-gray-300">
              Jelajahi dunia pemrograman dengan tutorial, tips, dan insight terbaru dari pengalaman coding sehari-hari.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <Link
                href="/blog"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Mulai Membaca
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-base font-medium rounded-lg text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
              >
                Tentang Saya
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{posts.length}</p>
              <p className="text-gray-600 dark:text-gray-400">Total Artikel</p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-green-100 dark:bg-green-900/30">
              <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {Array.from(new Set(posts.flatMap(post => post.tags))).length}
              </p>
              <p className="text-gray-600 dark:text-gray-400">Kategori</p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">2023</p>
              <p className="text-gray-600 dark:text-gray-400">Sejak</p>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Posts Section */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 mb-4">
            Artikel Terbaru
          </h2>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Temukan tutorial dan insight terbaru tentang dunia programming
          </p>
        </div>

        {!posts.length && (
          <div className="text-center py-12">
            <div className="mx-auto w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-lg">Belum ada artikel yang dipublikasikan.</p>
          </div>
        )}

        {/* Featured Article (First Post) */}
        {posts.length > 0 && (
          <div className="mb-12">
            {(() => {
              const featuredPost = posts[0]
              const { slug, date, title, summary, tags, images } = featuredPost
              return (
                <article className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <div className="lg:grid lg:grid-cols-2">
                    <div className="relative h-64 lg:h-full">
                      <Image
                        width={800}
                        height={600}
                        src={images}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500 text-white">
                          Featured
                        </span>
                      </div>
                    </div>
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {tags.slice(0, 3).map((tag) => (
                          <Tag key={tag} text={tag} />
                        ))}
                        {tags.length > 3 && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                            +{tags.length - 3} lainnya
                          </span>
                        )}
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold leading-tight tracking-tight mb-4">
                        <Link 
                          href={`/blog/${slug}`} 
                          className="text-gray-900 dark:text-gray-100 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
                        >
                          {title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 line-clamp-3">
                        {summary}
                      </p>
                      <Link
                        href={`/blog/${slug}`}
                        className="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-semibold transition-colors duration-200 group"
                        aria-label={`Baca "${title}"`}
                      >
                        Baca Artikel Lengkap
                        <svg className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              )
            })()}
          </div>
        )}

        {/* Other Articles Grid */}
        {posts.length > 1 && (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {posts.slice(1, MAX_DISPLAY).map((post) => {
              const { slug, date, title, summary, tags, images } = post
              return (
                <article key={slug} className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="relative h-48">
                    <Image
                      width={600}
                      height={400}
                      src={images}
                      alt={title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {tags.slice(0, 2).map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                      {tags.length > 2 && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                          +{tags.length - 2}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold leading-tight tracking-tight mb-3">
                      <Link 
                        href={`/blog/${slug}`} 
                        className="text-gray-900 dark:text-gray-100 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
                      >
                        {title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 line-clamp-2">
                      {summary}
                    </p>
                    <Link
                      href={`/blog/${slug}`}
                      className="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium transition-colors duration-200 group"
                      aria-label={`Baca "${title}"`}
                    >
                      Baca Selengkapnya
                      <svg className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        )}
      </div>

      {/* View All Posts Button */}
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-center mb-16">
          <Link
            href="/blog"
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-white bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            aria-label="Lihat semua artikel"
          >
            Lihat Semua Artikel
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      )}

      {/* Newsletter Section */}
      {siteMetadata.newsletter?.provider && (
        <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 lg:p-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Tetap Update dengan Artikel Terbaru
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Dapatkan notifikasi langsung ke email Anda setiap kali ada artikel baru tentang programming dan teknologi.
            </p>
            <NewsletterForm />
          </div>
        </div>
      )}
    </>
  )
}
