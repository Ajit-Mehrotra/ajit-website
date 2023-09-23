import Image from 'next/image'
import Button from './components/Button'
import NextJS from './Nextjs'
import AboutMe from './AboutMe'
import Navbar from './components/Navbar'
import Description from './Description'
import Experience from './Experience'
import Arrow from './components/Arrow'
import { ExperienceEntryProps } from './components/ExperienceEntry'



export default function Home() {
  return (
    <div>
      <Navbar />

      <main className="flex min-h-screen flex-col items-center justify-between ">

        <div className="flex place-items-center ">
          <Image
            className="rounded-full sm:w-[15rem] md:w-[20rem] lg:w-[35rem] py-[1rem]"
            src="/ajit.jpg"
            alt="Ajit Picture"
            width={1000}
            height={1000}

            priority
          />

        </div>
        <h3 className='text-sm md:text-2xl lg:text-3xl '>A LITTLE ABOUT</h3>
        <h1 className=' text-xl font-bold sm:text-4xl md:text-6xl lg:text-7xl '>AJIT MEHROTRA</h1>
        <Description />
        <div className="flex">
          <Button title='Experience' />
          <Button title='Linkedin' />
          <Button title='GitHub' />
          <Button title='Resume' />
          <Button title='Contact' />
        </div>

        {/* left off here */}
        <Arrow />
        <Experience />
        <AboutMe className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left"></AboutMe>
        <NextJS className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left"></NextJS>

      </main>
    </div>
  )
}
