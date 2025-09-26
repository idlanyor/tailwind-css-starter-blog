import Link from './Link'
import { FiTool, FiExternalLink, FiPlay, FiDownload } from 'react-icons/fi'

interface ToolCardProps {
  title: string
  categories: string
  href?: string
  description?: string
}

const ToolCard = ({ title, categories, href, description }: ToolCardProps) => {
  const getIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'youtube':
        return <FiPlay className="w-6 h-6" />
      case 'download':
        return <FiDownload className="w-6 h-6" />
      default:
        return <FiTool className="w-6 h-6" />
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'youtube':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
      case 'download':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
    }
  }

  return (
    <div className="tool-card group">
      <div className="tool-card-inner">
        {/* Icon and Category Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="tool-icon">
            {getIcon(categories)}
          </div>
          <span className={`tool-category-badge ${getCategoryColor(categories)}`}>
            {categories}
          </span>
        </div>

        {/* Title */}
        <h3 className="tool-title">
          {title}
        </h3>

        {/* Description */}
        {description && (
          <p className="tool-description">
            {description}
          </p>
        )}

        {/* Action Button */}
        {href && (
          <div className="mt-6">
            <Link
              href={href}
              className="tool-action-button"
            >
              <span>Use Tool</span>
              <FiExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        )}

        {/* Hover Effect Overlay */}
        <div className="tool-hover-overlay" />
      </div>
    </div>
  )
}

export default ToolCard