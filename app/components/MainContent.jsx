'use client'
import { Stories,Form,Navigator } from "./subcomponents"

const MainContent = () => {
  return (
    <section className="flex flex-col w-full items-center content-center justify-center">
        <Navigator />
        <Stories />
        <Form />
    </section>
  )
}

export default MainContent