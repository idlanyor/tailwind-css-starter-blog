import projectsData from '@/data/projectsData'
import stackData from '@/data/stackData'
import Card from '@/components/Card'
import CardTools from '@/components/CardTools'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h2 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Certificate
          </h2>
        </div>
        <div className="container py-12 ">
          <div className="-m-4 flex flex-wrap justify-center">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h2 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Tech Stack
          </h2>
        </div>
        <div className="container py-12 ">
          <div className="-m-4 flex flex-wrap justify-center">
            {stackData.map((d) => (
              <CardTools key={d.title} title={d.title} cat={d.description} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
