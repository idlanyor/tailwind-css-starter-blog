import Image from './Image'
import Link from './Link'

const Card = ({ title,cat }) => (
  <div className="md p-4 w-[244px]">
    <div
      className={`'h-full' overflow-hidden rounded-md border-2 hover:bg-slate-300 dark:bg-slate-900 border-gray-400 border-opacity-60 dark:border-gray-700`}
    >
      <div className="p-6">
        <h2 className="mb-3 text-xl font-bold leading-8 tracking-tight">
          {title}
        </h2>
          <p className='text-gray-500 mb-2'>Level : {cat}</p>
      </div>
    </div>
  </div>
)

export default Card
