import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  return <section className=" mx-2 sm:px-0 xl:mx-5 xl:px-0">{children}</section>
}
