import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  return (
    <section className=" mx-5 px-4 sm:px-6 xl:mx-10 xl:px-0">{children}</section>
  )
}
