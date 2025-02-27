import React from 'react'
import Hero from './_sections/Hero'
import About from './_sections/About'
import Content from './_sections/Content'
import Rules from './_sections/Rules'
import Location from './_sections/Location'

export default function Home() {
  return (
    <main className='min-h-screen flex flex-col items-center text-center cursor-default select-none'>
      <Hero />
      <About />
      <Content />
      <Rules />
      <Location />
    </main>
  )
}
