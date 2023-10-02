import Image from 'next/image'
import Button from './components/Button'
import Navbar from './components/Navbar'
import Description from './Description'
import Experience from './Experience'
import Arrow from './components/Arrow'
import { ExperienceEntryProps } from './components/ExperienceEntry'
import Takeaways from './Takeaways'
import CultureValues from './CultureValues'
import HobbiesSection from './Hobbies'
import ContactMe from './ContactMe'



export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between ">
        <div className="flex place-items-center ">
          <Image
            className="rounded-full w-[15rem] md:w-[20rem] lg:w-[35rem] py-[1rem]"
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
        <div className="flex flex-wrap items-center justify-center">
          <Button title='Experience' href='#experience' />
          <Button title='Linkedin' href='https://www.linkedin.com/in/ajit-mehrotra/' />
          <Button title='GitHub' href='https://github.com/Ajit-Mehrotra?tab=repositories' />
          <Button title='Resume' href='/resume.pdf' />
          <Button title='Contact' href='#contact' />
        </div>

        {/* left off here */}
        <Arrow padding="py-[2rem]" color="text-gray-400" width={2} />
        <div ></div>
        <Experience />
        <Arrow padding="py-[2rem]" color="text-gray-400" width={2} />
        <Takeaways />
        <Arrow padding="py-[2rem]" color="text-gray-400" width={2} />
        <CultureValues />
        <Arrow padding="py-[2rem]" color="text-gray-400" width={2} />
        <HobbiesSection />
        <Arrow padding="py-[2rem]" color="text-gray-400" width={2} />
        <ContactMe />
      </main>
    </div>
  )
}
