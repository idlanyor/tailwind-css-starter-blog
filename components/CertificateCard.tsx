import Image from './Image'
import Link from './Link'
import { FiExternalLink, FiCalendar, FiAward } from 'react-icons/fi'

interface CertificateCardProps {
  title: string
  description: string
  imgSrc?: string
  href?: string
  index?: number
}

const CertificateCard = ({ title, description, imgSrc, href, index = 0 }: CertificateCardProps) => {
  // Extract date from description if it exists
  const dateMatch = description.match(/(\d{1,2}\s\w+\s\d{4})/)
  const date = dateMatch ? dateMatch[1] : ''
  const provider = description.replace(/\s*-\s*\d{1,2}\s\w+\s\d{4}/, '').trim()

  return (
    <div className="certificate-card group" style={{ animationDelay: `${index * 0.1}s` }}>
      {/* Certificate Badge */}
      <div className="absolute top-4 right-4 z-10">
        <div className="certificate-badge">
          <FiAward className="w-4 h-4" />
        </div>
      </div>

      {/* Image Section */}
      {imgSrc && (
        <div className="certificate-image-container">
          <div className="certificate-image-overlay"></div>
          {href ? (
            <Link href={href} aria-label={`View certificate: ${title}`}>
              <Image
                alt={title}
                src={imgSrc}
                className="certificate-image"
                width={400}
                height={250}
              />
            </Link>
          ) : (
            <Image
              alt={title}
              src={imgSrc}
              className="certificate-image"
              width={400}
              height={250}
            />
          )}
        </div>
      )}

      {/* Content Section */}
      <div className="certificate-content">
        {/* Provider */}
        <div className="certificate-provider">{provider}</div>

        {/* Title */}
        <h3 className="certificate-title">
          {href ? (
            <Link href={href} aria-label={`View certificate: ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h3>

        {/* Date */}
        {date && (
          <div className="certificate-date">
            <FiCalendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
        )}

        {/* Action Button */}
        {href && (
          <div className="certificate-action">
            <Link
              href={href}
              className="certificate-button"
              aria-label={`View certificate: ${title}`}
            >
              <span>View Certificate</span>
              <FiExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default CertificateCard
