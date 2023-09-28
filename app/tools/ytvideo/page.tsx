import projectsData from '@/data/toolsData'
import Card from '@/components/CardTools'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Yt Video' })

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5 text-center">
          <h2 className="text-xl leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Youtube Video Downloader
          </h2>
        </div>
        <div className="w-auto">
          <div className="-m-4 flex flex-wrap justify-center px-5">
            <div className="p-8 rounded-lg shadow-md w-full">
            <form action="proses-unduh.php" method="POST">
              <div className="mb-4 text-center">
                <label htmlFor="videoUrl" className="block text-base font-medium">Tempel tautan video Anda di sini</label>
                <input
                  type="text"
                  id="videoUrl"
                  name="videoUrl"
                  className="mt-1 p-2 block w-full rounded-full border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500 focus:outline-none"
                  required
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-200"
                >
                  Unduh
                </button>
              </div>
            </form>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}
