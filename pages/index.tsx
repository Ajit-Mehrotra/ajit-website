
import Button from '../src/app/components/Button'
import Navbar from '../src/app/components/Navbar'
import Description from '../src/app/components/landing/Description'
import Experience from '../src/app/components/landing/Experience'
import Arrow from '../src/app/components/Arrow'
import Takeaways from '../src/app/components/landing/Takeaways'
import CultureValues from '../src/app/components/landing/CultureValues'
import HobbiesSection from '../src/app/components/landing/Hobbies'
import ContactMe from '../src/app/components/landing/ContactMe'



export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between ">

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
