/* eslint-disable jsx-a11y/anchor-is-valid */
'use client'

import { usePathname } from 'next/navigation'
import { slug } from 'github-slugger'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import Image from '@/components/Image'
import siteMetadata from '@/data/siteMetadata'
import tagData from 'app/tag-data.json'

interface PaginationProps {
  totalPages: number
  currentPage: number
}
interface ListLayoutProps {
  posts: CoreContent<Blog>[]
  title: string
  initialDisplayPosts?: CoreContent<Blog>[]
  pagination?: PaginationProps
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname()
  const basePath = pathname.split('/')[1]
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="flex justify-center items-center space-x-4 py-8">
      <button
        disabled={!prevPage}
        className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
          prevPage
            ? 'bg-primary-500 text-white hover:bg-primary-600 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
            : 'bg-gray-200 text-gray-400 cursor-not-allowed dark:bg-gray-700 dark:text-gray-500'
        }`}
      >
        {prevPage ? (
          <Link
            href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
            rel="prev"
            className="flex items-center space-x-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Sebelumnya</span>
          </Link>
        ) : (
          <span className="flex items-center space-x-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Sebelumnya</span>
          </span>
        )}
      </button>

      <div className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
          Halaman {currentPage} dari {totalPages}
        </span>
      </div>

      <button
        disabled={!nextPage}
        className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
          nextPage
            ? 'bg-primary-500 text-white hover:bg-primary-600 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
            : 'bg-gray-200 text-gray-400 cursor-not-allowed dark:bg-gray-700 dark:text-gray-500'
        }`}
      >
        {nextPage ? (
          <Link href={`/${basePath}/page/${currentPage + 1}`} rel="next" className="flex items-center space-x-2">
            <span>Selanjutnya</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ) : (
          <span className="flex items-center space-x-2">
            <span>Selanjutnya</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        )}
      </button>
    </div>
  )
}

export default function ListLayoutWithTags({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const pathname = usePathname()
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])
  const displayPosts = initialDisplayPosts.length > 0 ? initialDisplayPosts : posts
  const currentTag = pathname.split('/tags/')[1]

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary-50 via-white to-primary-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16 mb-12">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              Tag: {title}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Artikel dengan Tag{' '}
              <span className="bg-gradient-to-r from-primary-600 to-pink-600 bg-clip-text text-transparent">
                "{title}"
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Temukan {displayPosts.length} artikel menarik yang membahas topik {title.toLowerCase()}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="sticky top-8">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                  Semua Tags
                </h3>
                
                {/* All Posts Link */}
                <div className="mb-6">
                  {pathname.startsWith('/blog') ? (
                    <div className="flex items-center px-4 py-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg border-l-4 border-primary-500">
                      <svg className="w-4 h-4 mr-2 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-primary-700 dark:text-primary-300 font-semibold">Semua Artikel</span>
                    </div>
                  ) : (
                    <Link
                      href="/blog"
                      className="flex items-center px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 group"
                    >
                      <svg className="w-4 h-4 mr-2 text-gray-400 group-hover:text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300 group-hover:text-primary-500 font-medium">
                        Semua Artikel
                      </span>
                    </Link>
                  )}
                </div>

                {/* Tags List */}
                <div className="space-y-2">
                  {sortedTags.map((t) => {
                    const isActive = currentTag === slug(t)
                    return (
                      <div key={t}>
                        {isActive ? (
                          <div className="flex items-center justify-between px-4 py-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg border-l-4 border-primary-500">
                            <span className="text-primary-700 dark:text-primary-300 font-semibold capitalize">
                              {t}
                            </span>
                            <span className="bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-300 px-2 py-1 rounded-full text-xs font-medium">
                              {tagCounts[t]}
                            </span>
                          </div>
                        ) : (
                          <Link
                            href={`/tags/${slug(t)}`}
                            className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 group"
                            aria-label={`View posts tagged ${t}`}
                          >
                            <span className="text-gray-700 dark:text-gray-300 group-hover:text-primary-500 font-medium capitalize">
                              {t}
                            </span>
                            <span className="bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full text-xs font-medium group-hover:bg-primary-100 group-hover:text-primary-700 dark:group-hover:bg-primary-800 dark:group-hover:text-primary-300">
                              {tagCounts[t]}
                            </span>
                          </Link>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {displayPosts.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Tidak ada artikel ditemukan
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Belum ada artikel dengan tag "{title}" saat ini.
                </p>
              </div>
            ) : (
              <div className="space-y-8">
                {displayPosts.map((post, index) => {
                  const { path, date, title: postTitle, summary, tags, images } = post
                  const isFirst = index === 0
                  
                  return (
                    <article
                      key={path}
                      className={`group bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                        isFirst ? 'lg:flex' : ''
                      }`}
                    >
                      {/* Featured Image */}
                      {images && images.length > 0 && (
                        <div className={`relative overflow-hidden ${isFirst ? 'lg:w-1/2' : 'h-48'}`}>
                          <Image
                            src={images[0]}
                            alt={postTitle}
                            width={isFirst ? 800 : 600}
                            height={isFirst ? 600 : 400}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      )}

                      {/* Content */}
                      <div className={`p-6 ${isFirst && images && images.length > 0 ? 'lg:w-1/2' : ''}`}>
                        {/* Date */}
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                          <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                        </div>

                        {/* Title */}
                        <h2 className={`font-bold leading-tight tracking-tight mb-4 ${isFirst ? 'text-2xl lg:text-3xl' : 'text-xl lg:text-2xl'}`}>
                          <Link 
                            href={`/${path}`} 
                            className="text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                          >
                            {postTitle}
                          </Link>
                        </h2>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {tags?.slice(0, isFirst ? 4 : 3).map((tag) => (
                            <Tag key={tag} text={tag} />
                          ))}
                          {tags && tags.length > (isFirst ? 4 : 3) && (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                              +{tags.length - (isFirst ? 4 : 3)} lainnya
                            </span>
                          )}
                        </div>

                        {/* Summary */}
                        <p className={`text-gray-600 dark:text-gray-300 leading-relaxed ${isFirst ? 'text-base' : 'text-sm'} ${isFirst ? 'line-clamp-4' : 'line-clamp-3'}`}>
                          {summary}
                        </p>

                        {/* Read More */}
                        <div className="mt-6">
                          <Link
                            href={`/${path}`}
                            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors duration-200"
                          >
                            Baca Selengkapnya
                            <svg className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </article>
                  )
                })}
              </div>
            )}

            {/* Pagination */}
            {pagination && pagination.totalPages > 1 && (
              <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
            )}
          </div>
        </div>
      </div>
    </>
  )
}
